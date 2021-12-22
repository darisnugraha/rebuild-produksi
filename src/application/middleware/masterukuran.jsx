import {
  setDataMasterUkuranSuccess,
  setDataMasterUkuranFailed,
  GET_ALL_MASTER_UKURAN,
  GET_MASTER_UKURAN_ID,
  setEditFormMasterUkuran,
  setDataMasterUkuranEdit,
  ADD_MASTER_UKURAN,
  DELETE_MASTER_UKURAN,
  EDIT_MASTER_UKURAN,
} from "../actions/masterukuran";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterUkuranGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_UKURAN) {
      const response = await api.MasterUkuran.getAllMasterUkuran();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterUkuranSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterUkuranFailed({ error: response.error }));
      }
    }
  };

const masterUkuranGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_UKURAN_ID) {
      dispatch(setEditFormMasterUkuran(true));
      const dataMasterUkuran = getState().masterukuran.feedback;
      const dataMasterUkuranFilter = dataMasterUkuran.filter((item) => {
        return item.kode_ukuran === action.payload;
      });
      dispatch(setDataMasterUkuranEdit({ dataEdit: dataMasterUkuranFilter }));
    }
  };

const addDataMasterUkuran =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_UKURAN) {
      const data = getState().form.FormTambahMasterUkuran.values;
      delete data.kode_ukuran;
      const response = await api.MasterUkuran.addMasterUkuran(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterUkuran =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_UKURAN) {
      const data = {
        nama_ukuran: action.payload.data,
      };
      const response = await api.MasterUkuran.deleteMasterUkuran(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterUkuran =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_UKURAN) {
      const data = getState().form.FormTambahMasterUkuran.values;
      const response = await api.MasterUkuran.editMasterUkuran(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterUkuranGetAll,
  masterUkuranGetDataID,
  addDataMasterUkuran,
  deleteDataMasterUkuran,
  editDataMasterUkuran,
];

export default data;
