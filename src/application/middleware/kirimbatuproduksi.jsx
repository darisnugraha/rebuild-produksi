import {
  setDataJoKirimBatuProduksiSuccess,
  setDataJoKirimBatuProduksiFailed,
  GET_DETAIL_JO_BY_ID,
  GET_BERAT_BATU,
  setBeratBatuSuccess,
  COUNT_BERAT_KIRIM_BATU_PRODUKSI,
  setCountBeratKirimBatuProduksi,
  POST_DATA_KIRIM_BATU_LOKAL,
  setDataKirimBatuProduksiSuccess,
  setDataHistoryKirimBatuProduksiSuccess,
  setDataHistoryKirimBatuProduksiFailed,
  ADD_DATA_KIRIM_BATU,
} from "../actions/kirimbatuproduksi";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const kirimbatuproduksiGetJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DETAIL_JO_BY_ID) {
      const response = await api.KirimBatuProduksi.getAllKirimBatuProduksi(
        action.payload.data
      );
      if (response.value?.status === "berhasil") {
        if (response.value.data.length === 0) {
          sweetalert.default.Failed(response.value.pesan);
        } else {
          dispatch(
            setDataJoKirimBatuProduksiSuccess({ feedback: response.value.data })
          );
        }
      } else {
        dispatch(setDataJoKirimBatuProduksiFailed({ error: response.error }));
      }
    }
  };

const kirimbatuGetBeratBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_BERAT_BATU) {
      const dataMasterBatu = getState().masterbatu.feedback;
      const dataMasterBatuFilter = dataMasterBatu.filter((item) => {
        return item.kode_batu === action.payload.data;
      });
      dispatch(setBeratBatuSuccess({ dataBatu: dataMasterBatuFilter }));
    }
  };

const countberatbatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === COUNT_BERAT_KIRIM_BATU_PRODUKSI) {
      let total = 0;
      const jumlah = action.payload;
      const berat_asli = parseFloat(
        getState().kirimbatuproduksi.dataBatu[0].berat_batu
      );
      total = jumlah * berat_asli;
      dispatch(setCountBeratKirimBatuProduksi(total));
    }
  };

const simpanDataKirimBatuLocal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === POST_DATA_KIRIM_BATU_LOKAL) {
      if (
        getLocal("data_kirim_batu_produksi") === undefined ||
        getLocal("data_kirim_batu_produksi") === null
      ) {
        const data = getState().form.FormTambahKirimBatuProduksi.values;
        let datalocal = [];
        if (data.no_job_order === undefined || data.kode_batu === undefined) {
          sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
        } else if (data.jumlah_kirim === 0 || data.berat_kirim === 0) {
          sweetalert.default.Failed("Jumlah Kirim Minimal 1");
        } else {
          const response =
            await api.KirimBatuProduksi.getHistoryKirimBatuProduksi(
              data.no_job_order
            );

          if (response.value !== null) {
            dispatch(
              setDataHistoryKirimBatuProduksiSuccess({
                feedback: response.value.data,
              })
            );
            writeLocal("data_history_kirim_batu_produksi", response.value.data);
          } else {
            dispatch(
              setDataHistoryKirimBatuProduksiFailed({
                error: response.error.data.pesan,
              })
            );
          }
          sweetalert.default.Success("Berhasil Menambahkan Data !");
          dispatch(setDataKirimBatuProduksiSuccess({ feedback: data }));
          datalocal.push(data);
          writeLocal("data_kirim_batu_produksi", datalocal);
        }
      } else {
        const data = getState().form.FormTambahKirimBatuProduksi.values;
        let datalocal = getLocal("data_kirim_batu_produksi");
        const datalocalFill = datalocal.filter((item) => {
          return item.no_job_order === data.no_job_order;
        });
        if (datalocalFill.length === 0) {
          sweetalert.default.Failed("No Job Order Harus Sama !");
        } else {
          if (data.no_job_order === undefined || data.kode_batu === undefined) {
            sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
          } else if (data.jumlah_kirim === 0 || data.berat_kirim === 0) {
            sweetalert.default.Failed("Jumlah Kirim Minimal 1");
          } else {
            const response =
              await api.KirimBatuProduksi.getHistoryKirimBatuProduksi(
                data.no_job_order
              );

            if (response.value?.pesan === "berhasil") {
              dispatch(
                setDataHistoryKirimBatuProduksiSuccess({
                  feedback: response.value.data,
                })
              );
              writeLocal(
                "data_history_kirim_batu_produksi",
                response.value.data
              );
            } else {
              dispatch(
                setDataHistoryKirimBatuProduksiFailed({
                  error: response.error.data.pesan,
                })
              );
            }
            sweetalert.default.Success("Berhasil Menambahkan Data !");
            dispatch(setDataKirimBatuProduksiSuccess({ feedback: data }));
            datalocal.push(data);
            writeLocal("data_kirim_batu_produksi", datalocal);
            window.location.reload();
          }
        }
      }
    }
  };

const addDataKirimBatuProduksiPost =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DATA_KIRIM_BATU) {
      const data = getLocal("data_kirim_batu_produksi");
      let detail_batu = [];
      for (let index = 0; index < data.length; index++) {
        const data_detail = {
          kode_batu: data[index].kode_batu,
          qty_kirim: parseFloat(data[index].jumlah_kirim),
          berat_kirim: parseFloat(data[index].berat_kirim),
        };
        detail_batu.push(data_detail);
      }
      const onSend = {
        detail_batu,
        kode_barang: data[0].kode_barang,
        kode_jenis_bahan: data[0].kode_jenis_bahan,
        no_job_order: data[0].no_job_order,
      };
      const response = await api.KirimBatuProduksi.addKirimBatuProduksi(onSend);
      if (response.value !== null) {
        sweetalert.default.Success("Berhasil Menambahkan Data");
        localStorage.removeItem("data_history_kirim_batu_produksi");
        localStorage.removeItem("data_kirim_batu_produksi");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  kirimbatuproduksiGetJO,
  kirimbatuGetBeratBatu,
  countberatbatu,
  simpanDataKirimBatuLocal,
  addDataKirimBatuProduksiPost,
];

export default data;
