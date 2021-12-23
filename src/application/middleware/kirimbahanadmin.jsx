import {
  setDataDivisiSuccess,
  setDataDivisiFailed,
  GET_ALL_DIVISI,
  ADD_KIRIM_BAHAN_ADMIN_BAHAN,
} from "../actions/kirimbahanadmin";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const divisGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_DIVISI) {
      const response = await api.KirimBahanAdmin.getAllDivisi();
      if (response.value?.status === "berhasil") {
        dispatch(setDataDivisiSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataDivisiFailed({ error: response.error }));
      }
    }
  };

const addDataKirimBahanAdminBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_BAHAN_ADMIN_BAHAN) {
      const data = getState().form.FormKirimBahanAdmin.values;
      if (data !== undefined) {
        data.berat = parseFloat(data.berat);
        const response = await api.KirimBahanAdmin.addKirimBahanAdmin(data);
        if (response.value !== null) {
          if (response.value.status === "berhasil") {
            sweetalert.default.Success(response.value?.pesan);
          } else {
            sweetalert.default.Failed(response.value?.pesan);
          }
        } else {
          sweetalert.default.Failed(response.error?.data.pesan);
        }
      } else {
        sweetalert.default.Failed("Mohon Isi Form Terlebih Dahulu !");
      }
    }
  };

const data = [divisGetAll, addDataKirimBahanAdminBahan];

export default data;
