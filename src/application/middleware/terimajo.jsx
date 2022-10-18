import {
  setDataDetailJOSuccess,
  setDataDetailJOFailed,
  GET_ALL_DETAIL_JO,
  ADD_TERIMA_JO,
} from "../actions/terimajo";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataDetailJo =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DETAIL_JO) {
      const data = {
        nama_divisi: localStorage.getItem("divisi"),
        no_job_order: action.payload.data,
      };
      api.TerimaJO.getDetailTerimaJO(data).then((res) => {
        if (res.value !== null) {
          if (res.value.length === 0) {
            sweetalert.default.Failed("Data Tidak Ada !");
            dispatch(setDataDetailJOSuccess({ feedback: res.value }));
          } else {
            sweetalert.default.SuccessNoReload("Berhasil Mengambil Data !");
            dispatch(setDataDetailJOSuccess({ feedback: res.value }));
          }
        } else {
          dispatch(setDataDetailJOFailed({ error: res.error }));
        }
      });
    }
  };

const addTerimaJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_JO) {
      const dataTerimaJO = getState().form.FormTerimaJO.values;
      const onSendCheckOut = {
        no_job_order: dataTerimaJO.no_job_order.toUpperCase(),
        divisi_tujuan: dataTerimaJO.divisi_terima.toUpperCase(),
        tukang_tujuan: dataTerimaJO.tukang_terima.toUpperCase(),
        kode_barang: dataTerimaJO.kode_barang.toUpperCase(),
        kode_jenis_bahan: dataTerimaJO.kode_jenis_bahan.toUpperCase(),
        jumlah_terima: parseFloat(dataTerimaJO.jumlah_akhir),
        berat_terima: parseFloat(dataTerimaJO.berat_akhir),
      };

      api.TerimaJO.addTerimaJOCheckout(onSendCheckOut).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success(
            res.value.message || "Berhasil Menyimpan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menyimpan Data !"
          );
        }
      });
    }
  };

const data = [getDataDetailJo, addTerimaJO];

export default data;
