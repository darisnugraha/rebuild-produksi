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
  ADD_KIRIM_LEBUR,
  getAllSaldoBahan,
} from "../actions/kirimlebur";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataHistoryKirimLebur =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_HISTORY_KIRIM_LEBUR) {
      api.KirimLebur.getAllHistoryKirimLebur().then((res) => {
        if (res.value !== null) {
          dispatch(setDataHistoryKirimLeburSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataHistoryKirimLeburFailed({ error: res.error }));
        }
      });
    }
  };

const getDataSaldoBahanOpen =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_SALDO_BAHAN_OPEN) {
      dispatch(setDataSaldoBahanSuccess({ feedback: [] }));
      if (action.payload.data === null) {
        const data = getState().form.FormTambahKirimLebur.values;
        dispatch(setDataAsalBahan({ asalBahan: data.asal_bahan }));
        const onSendData = { asal_bahan: data.asal_bahan };
        api.KirimLebur.getAllSaldoBahanOpen({
          dataKirim: onSendData,
        }).then((res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              const kadarkali = parseFloat(res.value[0].kadar) / 100;
              const karat = parseFloat(res.value[0].berat) * kadarkali;
              dispatch(setData24K({ karat24: karat.toFixed(4) }));
              dispatch(setDataSaldoBahanOpenSuccess({ feedback: res.value }));
              dispatch(getAllSaldoBahan({ idBahan: res.value[0].keterangan }));
            } else {
              dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
            }
          } else {
            dispatch(setData24K({ karat24: 0 }));
            dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
            dispatch(setDataSaldoBahanOpenFailed({ error: res.error }));
          }
        });
      } else {
        const onSendData = { asal_bahan: action.payload.data };
        dispatch(setDataAsalBahan({ asalBahan: action.payload.data }));
        api.KirimLebur.getAllSaldoBahanOpen({
          dataKirim: onSendData,
        }).then((res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              const kadarkali = parseFloat(res.value[0].kadar) / 100;
              const karat = parseFloat(res.value[0].berat) * kadarkali;
              dispatch(setData24K({ karat24: karat.toFixed(4) }));
              dispatch(setDataSaldoBahanOpenSuccess({ feedback: res.value }));
              dispatch(getAllSaldoBahan({ idBahan: res.value[0].keterangan }));
            } else {
              dispatch(setData24K({ karat24: 0 }));
              dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
            }
          } else {
            dispatch(setData24K({ karat24: 0 }));
            dispatch(setDataSaldoBahanOpenSuccess({ feedback: [] }));
            dispatch(setDataSaldoBahanOpenFailed({ error: res.error }));
          }
        });
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
        return item.keterangan === id;
      });
      const onSendData = {
        asal_bahan: data.asal_bahan,
        keterangan: id,
        no_abu:
          dataSaldoBahanFill[0].no_abu_cor ||
          dataSaldoBahanFill[0].no_abu_potong ||
          dataSaldoBahanFill[0].no_abu ||
          dataSaldoBahanFill[0].no_abu_tukang,
      };
      api.KirimLebur.getAllSaldoBahan({
        dataKirim: onSendData,
      }).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            const kadarkali = parseFloat(res.value[0].kadar) / 100;
            const karat = parseFloat(res.value[0].berat) * kadarkali;
            dispatch(setData24K({ karat24: karat.toFixed(4) }));
            dispatch(setDataSaldoBahanSuccess({ feedback: res.value }));
          } else {
            dispatch(setData24K({ karat24: 0 }));
            dispatch(setDataSaldoBahanSuccess({ feedback: [] }));
          }
        } else {
          dispatch(setData24K({ karat24: 0 }));
          dispatch(setDataSaldoBahanSuccess({ feedback: [] }));
          dispatch(setDataSaldoBahanFailed({ error: res.error }));
        }
      });
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
        let data = getState().form.FormTambahKirimLebur.values;
        let dataLocal = [];
        const jenisbahan =
          getState().kirimlebur.feedback[0]?.jenis_bahan ||
          getState().kirimlebur.feedbackSaldoBahan[0]?.jenis_bahan;
        data.jenis_bahan = jenisbahan;
        if (data.asal_bahan === "INPUT MANUAL") {
          if (
            data.asal_bahan === undefined ||
            data.keterangan_lebur === undefined ||
            data.berat === undefined ||
            data.kadar === undefined ||
            data.karat === undefined ||
            data.keterangan === undefined
          ) {
            sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
          } else {
            sweetalert.default.Success("Berhasil Menyimpan Data !");
            data.no_abu = "-";
            data.jenis_bahan = "-";
            dataLocal.push(data);
            writeLocal("data_kirim_lebur", dataLocal);
          }
        } else {
          if (
            data.asal_bahan === undefined ||
            data.jenis_bahan === undefined ||
            data.berat === undefined ||
            data.kadar === undefined ||
            data.karat === undefined ||
            data.keterangan === undefined ||
            data.keterangan_lebur === undefined
          ) {
            sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
          } else {
            sweetalert.default.Success("Berhasil Menyimpan Data !");
            dataLocal.push(data);
            writeLocal("data_kirim_lebur", dataLocal);
          }
        }
      } else {
        let dataLocal = getLocal("data_kirim_lebur");
        let data = getState().form.FormTambahKirimLebur.values;
        const jenisbahan =
          getState().kirimlebur.feedback[0]?.jenis_bahan ||
          getState().kirimlebur.feedbackSaldoBahan[0]?.jenis_bahan;
        data.jenis_bahan = jenisbahan;
        if (data.asal_bahan === "INPUT MANUAL") {
          if (
            data.asal_bahan === undefined ||
            data.keterangan_lebur === undefined ||
            data.berat === undefined ||
            data.kadar === undefined ||
            data.karat === undefined ||
            data.keterangan === undefined
          ) {
            sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
          } else {
            sweetalert.default.Success("Berhasil Menyimpan Data !");
            data.no_abu = "-";
            data.jenis_bahan = "-";
            dataLocal.push(data);
            writeLocal("data_kirim_lebur", dataLocal);
          }
        } else {
          if (
            data.asal_bahan === undefined ||
            data.jenis_bahan === undefined ||
            data.berat === undefined ||
            data.kadar === undefined ||
            data.karat === undefined ||
            data.keterangan === undefined ||
            data.keterangan_lebur === undefined
          ) {
            sweetalert.default.Failed("Mohon Lengkapi Form Terlebih Dahulu !");
          } else {
            sweetalert.default.Success("Berhasil Menyimpan Data !");
            dataLocal.push(data);
            writeLocal("data_kirim_lebur", dataLocal);
          }
        }
      }
    }
  };

const addKirimLebur =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_LEBUR) {
      const data = getLocal("data_kirim_lebur");
      const newArr = [];
      if (data !== null) {
        data.forEach((element) => {
          const row = {
            asal_bahan: element.asal_bahan,
            no_abu: element.no_abu,
            jenis_bahan: element.jenis_bahan,
            keterangan: element.keterangan,
            keterangan_lebur: element.keterangan_lebur,
            berat: parseFloat(element.berat),
            kadar: parseFloat(element.kadar),
            karat: parseFloat(element.karat),
          };
          newArr.push(row);
        });
        const onSend = {
          detail_kirim_lebur: newArr,
        };
        api.KirimLebur.addDataKirimLebur({
          dataKirim: onSend,
        }).then((res) => {
          if (res.value !== null) {
            sweetalert.default.Success(
              res.value.message || "Berhasil Mengirim Data !"
            );
            localStorage.removeItem("data_kirim_lebur");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Mengirim Data !"
            );
          }
        });
      }
    }
  };

const data = [
  getDataHistoryKirimLebur,
  getDataSaldoBahanOpen,
  getDataSaldoBahan,
  setDataLocalKirimLebur,
  addKirimLebur,
];

export default data;
