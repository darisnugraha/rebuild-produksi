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
      const data = getState().form.FormTambahKirimBatuProduksi.values;
      log(data);
      let datalocal = [];
      if (
        data.no_job_order === undefined ||
        data.kode_batu === undefined
      ) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else if (data.jumlah_kirim === 0 || data.berat_kirim === 0) {
        sweetalert.default.Failed("Jumlah Kirim Minimal 1");
      } else {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(setDataKirimBatuProduksiSuccess({ feedback: data }));
        datalocal.push(data);
        writeLocal("data_kirim_batu_produksi", datalocal);
        window.location.reload();
      }
    }
  };

const data = [
  kirimbatuproduksiGetJO,
  kirimbatuGetBeratBatu,
  countberatbatu,
  simpanDataKirimBatuLocal,
];

export default data;
