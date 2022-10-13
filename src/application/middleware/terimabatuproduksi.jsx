import {
  setDataKirimBatuSuccess,
  setDataKirimBatuFailed,
  GET_ALL_KIRIM_BATU,
  ADD_TERIMA_BATU_PRODUKSI,
  GET_KIRIM_BATU_LOCAL,
} from "../actions/terimabatuproduksi";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getAllDataKirimBatuProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_KIRIM_BATU) {
      const data = getState().form.FormTerimaBatuProduksi.values;
      api.TerimaBatuProduksi.getAllKirimBatuProduksi(data).then((res) => {
        if (res.value !== null) {
          if (res.value.length !== 0) {
            writeLocal("produksiterimabatu", data);
            writeLocal("detail_produksiterimabatu", res.value);
            sweetalert.default.SuccessNoReload("Berhasil Menyimpan Data !");
            dispatch(setDataKirimBatuSuccess({ feedback: res.value }));
          } else {
            sweetalert.default.Failed("Data Tidak Ada !");
            dispatch(setDataKirimBatuSuccess({ feedback: [] }));
            dispatch(setDataKirimBatuFailed({ error: res.value }));
          }
        } else {
          sweetalert.default.Failed("Data Tidak Ada !");
          dispatch(setDataKirimBatuSuccess({ feedback: [] }));
          dispatch(setDataKirimBatuFailed({ error: res.error }));
        }
      });
    }
    if (action.type === GET_KIRIM_BATU_LOCAL) {
      const data = action.payload.data;
      if (data !== null) {
        api.TerimaBatuProduksi.getAllKirimBatuProduksi(data).then((res) => {
          if (res.value !== null) {
            if (res.value.length !== 0) {
              writeLocal("produksiterimabatu", data);
              writeLocal("detail_produksiterimabatu", res.value);
              dispatch(setDataKirimBatuSuccess({ feedback: res.value }));
            } else {
              dispatch(setDataKirimBatuSuccess({ feedback: [] }));
              dispatch(setDataKirimBatuFailed({ error: res.value }));
            }
          } else {
            dispatch(setDataKirimBatuSuccess({ feedback: [] }));
            dispatch(setDataKirimBatuFailed({ error: res.error }));
          }
        });
      }
    }
  };

const addTerimaBatuProduksi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_TERIMA_BATU_PRODUKSI) {
      const data = getLocal("produksiterimabatu");
      const datakirim = {
        divisi: data.divisi.toUpperCase(),
        no_job_order: data.no_job_order,
      };
      api.TerimaBatuProduksi.addTerimaBatuProduksi(datakirim).then((res) => {
        if (res.value !== null) {
          localStorage.removeItem("produksiterimabatu");
          localStorage.removeItem("detail_produksiterimabatu");
          sweetalert.default.Success(
            res.value.message || "Berhasil menambahkan Data !"
          );
        } else {
          sweetalert.default.Failed(
            res.error.message || "Gagal menambahkan Data !"
          );
        }
      });
    }
  };

const data = [getAllDataKirimBatuProduksi, addTerimaBatuProduksi];

export default data;
