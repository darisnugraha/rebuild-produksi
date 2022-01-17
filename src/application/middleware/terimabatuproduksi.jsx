import {
  setDataKirimBatuSuccess,
  setDataKirimBatuFailed,
  GET_ALL_KIRIM_BATU,
  ADD_TERIMA_BATU_PRODUKSI,
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
      const response = await api.TerimaBatuProduksi.getAllKirimBatuProduksi(
        data
      );
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          if (response.value.data.length !== 0) {
            writeLocal("produksiterimabatu", data);
            sweetalert.default.SuccessNoReload(response.value.pesan);
            dispatch(
              setDataKirimBatuSuccess({ feedback: response.value.data })
            );
          } else {
            sweetalert.default.Failed(response.value.pesan);
            dispatch(setDataKirimBatuSuccess({ feedback: [] }));
            dispatch(setDataKirimBatuFailed({ error: response.value.pesan }));
          }
        } else {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataKirimBatuSuccess({ feedback: [] }));
          dispatch(setDataKirimBatuFailed({ error: response.value.pesan }));
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
        dispatch(setDataKirimBatuSuccess({ feedback: [] }));
        dispatch(setDataKirimBatuFailed({ error: response.error }));
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
        nama_divisi: data.divisi,
        no_job_order: data.no_job_order,
      };
      const response = await api.TerimaBatuProduksi.addTerimaBatuProduksi(
        datakirim
      );
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          if (response.value.data.length !== 0) {
            localStorage.removeItem("produksiterimabatu");
            sweetalert.default.Success(response.value.pesan);
          } else {
            sweetalert.default.Failed(response.value.pesan);
          }
        } else {
          sweetalert.default.Failed(response.value.pesan);
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [getAllDataKirimBatuProduksi, addTerimaBatuProduksi];

export default data;
