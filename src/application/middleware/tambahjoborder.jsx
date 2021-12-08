import {
  setDataStaffSuccess,
  ADD_DATA_STAFF,
  ADD_DATA_DETAIL_JO,
  setDataDetailJOSuccess,
} from "../actions/tambahjoborder";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const addDataStaff =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DATA_STAFF) {
      const data = getState().form.FormDataStaff.values;
      let dataLocal = [];
      if (data.no_pohon === undefined) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(setDataStaffSuccess({ feedback: data }));
        dataLocal.push(data);
        writeLocal("data_staff", dataLocal);
        window.location.reload();
      }
    }
  };

const addDataDetailJO =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_DATA_DETAIL_JO) {
      const data = getState().form.FormDetailJobOrder.values;
      let dataLocal = [];
      if (
        data.no_spk === undefined ||
        data.nama_barang === undefined ||
        data.jumlah_bahan === undefined ||
        data.berat_bahan === undefined ||
        data.catatan === undefined
      ) {
        sweetalert.default.Failed("Lengkapi Form Terlebih Dahulu !");
      } else {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        dispatch(setDataDetailJOSuccess({ feedback: data }));
        dataLocal.push(data);
        writeLocal("data_detail_jo", dataLocal);
        window.location.reload();
      }
    }
  };

const data = [addDataStaff, addDataDetailJO];

export default data;
