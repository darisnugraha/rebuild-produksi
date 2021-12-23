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
      const response = await api.TerimaJO.getDetailTerimaJO(data);
      if (response.value?.status === "berhasil") {
        if (response.value.data.length === 0) {
          sweetalert.default.Failed(response.value.pesan);
          dispatch(setDataDetailJOSuccess({ feedback: response.value.data }));
        } else {
          sweetalert.default.SuccessNoReload(response.value.pesan);
          dispatch(setDataDetailJOSuccess({ feedback: response.value.data }));
        }
      } else {
        dispatch(setDataDetailJOFailed({ error: response.error }));
      }
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
      const onSendCart = {
        berat: parseFloat(dataTerimaJO.berat_akhir),
        jumlah: parseFloat(dataTerimaJO.jumlah_akhir),
        nama_divisi: dataTerimaJO.divisi_terima,
        no_job_order: dataTerimaJO.no_job_order,
      };
      const onSendCheckOut = {
        nama_divisi: dataTerimaJO.divisi_terima,
        no_job_order: dataTerimaJO.no_job_order,
        staff: dataTerimaJO.tukang_terima,
        tujuan_divisi: dataTerimaJO.divisi_terima,
      };
      const responseCart = await api.TerimaJO.addTerimaJOCart(onSendCart);
      if (responseCart.value !== null) {
        if (responseCart.value.status === "berhasil") {
          const responseCheckout = await api.TerimaJO.addTerimaJOCheckout(
            onSendCheckOut
          );
          if (responseCheckout.value !== null) {
            if (responseCheckout.value.status === "berhasil") {
              sweetalert.default.Success(responseCheckout.value.pesan);
            } else {
              sweetalert.default.Failed(responseCheckout.value.pesan);
            }
          } else {
            sweetalert.default.Failed(responseCheckout.error.data.pesan);
          }
        } else {
          sweetalert.default.Failed(responseCart.value.pesan);
        }
      } else {
        sweetalert.default.Failed(responseCart.error.data.pesan);
      }
    }
  };

const data = [getDataDetailJo, addTerimaJO];

export default data;
