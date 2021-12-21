import {
  setDataHistoryKirimLeburSuccess,
  setDataHistoryKirimLeburFailed,
  GET_ALL_HISTORY_KIRIM_LEBUR,
  GET_ALL_SALDO_BAHAN_OPEN,
  setDataSaldoBahanOpenSuccess,
  setDataSaldoBahanOpenFailed,
  GET_ALL_SALDO_BAHAN,
  setDataSaldoBahanSuccess,
  setDataSaldoBahanFailed,
  setData24K,
  setDataAsalBahan,
  SET_LOCAL_DATA_KIRIM_LEBUR,
} from "../actions/kirimlebur";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataHistoryKirimLebur =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_HISTORY_KIRIM_LEBUR) {
      const response = await api.KirimLebur.getAllHistoryKirimLebur();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataHistoryKirimLeburSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataHistoryKirimLeburFailed({ error: response.error }));
      }
    }
  };

const getDataSaldoBahanOpen =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_BAHAN_OPEN) {
      if (action.payload.data === null) {
        const data = getState().form.FormTambahKirimLebur.values;
        dispatch(setDataAsalBahan({ asalBahan: data.asal_bahan }));
        const onSendData = { asal_bahan: data.asal_bahan };
        const response = await api.KirimLebur.getAllSaldoBahanOpen({
          dataKirim: onSendData,
        });
        if (response.value?.status === "berhasil") {
          if (response.value.data.length !== 0) {
            const kadarkali = parseFloat(response.value.data[0].kadar) / 100;
            const karat = parseFloat(response.value.data[0].berat) * kadarkali;
            dispatch(setData24K({ karat24: karat.toFixed(4) }));
            dispatch(
              setDataSaldoBahanOpenSuccess({ feedback: response.value.data })
            );
          } else {
            dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
          }
        } else {
          dispatch(setData24K({ karat24: "" }));
          dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
          dispatch(setDataSaldoBahanOpenFailed({ error: response.error }));
        }
      } else {
        const onSendData = { asal_bahan: action.payload.data };
        dispatch(setDataAsalBahan({ asalBahan: action.payload.data }));
        const response = await api.KirimLebur.getAllSaldoBahanOpen({
          dataKirim: onSendData,
        });
        if (response.value?.status === "berhasil") {
          if (response.value.data.length !== 0) {
            const kadarkali = parseFloat(response.value.data[0].kadar) / 100;
            const karat = parseFloat(response.value.data[0].berat) * kadarkali;
            dispatch(setData24K({ karat24: karat.toFixed(4) }));
            dispatch(
              setDataSaldoBahanOpenSuccess({ feedback: response.value.data })
            );
          } else {
            dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
          }
        } else {
          dispatch(setData24K({ karat24: "" }));
          dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
          dispatch(setDataSaldoBahanOpenFailed({ error: response.error }));
        }
      }
    }
  };

const getDataSaldoBahan =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_BAHAN) {
      const id = action.payload.data;
      const data = getState().form.FormTambahKirimLebur.values;
      const dataSaldoBahan = getState().kirimlebur.feedbackSaldoBahan;
      const dataSaldoBahanFill = dataSaldoBahan.filter((item) => {
        return item.id === id;
      });
      const onSendData = {
        asal_bahan: data.asal_bahan,
        id: id,
        jenis_bahan: dataSaldoBahanFill[0].jenis_bahan,
      };
      const response = await api.KirimLebur.getAllSaldoBahan({
        dataKirim: onSendData,
      });
      if (response.value?.status === "berhasil") {
        const kadarkali = parseFloat(response.value.data[0].kadar) / 100;
        const karat = parseFloat(response.value.data[0].berat) * kadarkali;
        dispatch(setData24K({ karat24: karat.toFixed(4) }));
        dispatch(setDataSaldoBahanSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataSaldoBahanFailed({ error: response.error }));
      }
    }
  };

const setDataLocalKirimLebur =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_LOCAL_DATA_KIRIM_LEBUR) {
      if (
        getLocal("data_kirim_lebur") === undefined ||
        getLocal("data_kirim_lebur") === null
      ) {
        const data = getState().form.FormTambahKirimLebur.values;
        let dataLocal = [];
        if (
          data.asal_bahan === undefined ||
          data.jenis_bahan === undefined ||
          data.berat_kirim === undefined ||
          data.kadar === undefined ||
          data.karat_24 === undefined ||
          data.keterangan === undefined
        ) {
          sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
        } else {
          sweetalert.default.Success("Berhasil Menyimpan Data !");
          dataLocal.push(data);
          writeLocal("data_kirim_lebur", dataLocal);
          window.location.reload();
        }
      } else {
        let dataLocal = getLocal("data_kirim_lebur");
        const data = getState().form.FormTambahKirimLebur.values;
        if (
          data.asal_bahan === undefined ||
          data.jenis_bahan === undefined ||
          data.berat_kirim === undefined ||
          data.kadar === undefined ||
          data.karat_24 === undefined ||
          data.keterangan === undefined
        ) {
          sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
        } else {
          sweetalert.default.Success("Berhasil Menyimpan Data !");
          dataLocal.push(data);
          writeLocal("data_kirim_lebur", dataLocal);
          window.location.reload();
        }
      }
    }
  };

const data = [
  getDataHistoryKirimLebur,
  getDataSaldoBahanOpen,
  getDataSaldoBahan,
  setDataLocalKirimLebur,
];

export default data;
