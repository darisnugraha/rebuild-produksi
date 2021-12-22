import {
  setDataMasterBahanSuccess,
  setDataMasterBahanFailed,
  GET_ALL_MASTER_BAHAN,
  GET_MASTER_BAHAN_ID,
  setEditFormMasterBahan,
  setDataMasterBahanEdit,
  ADD_MASTER_BAHAN,
  DELETE_MASTER_BAHAN,
  EDIT_MASTER_BAHAN,
} from "../actions/masterbahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterBahanGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_BAHAN) {
      const response = await api.MasterBahan.getAllMasterBahan();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterBahanSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterBahanFailed({ error: response.error }));
      }
    }
  };

const masterBahanGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_BAHAN_ID) {
      dispatch(setEditFormMasterBahan(true));
      const dataMasterBahan = getState().masterbahan.feedback;
      const dataMasterBahanFilter = dataMasterBahan.filter((item) => {
        return item.kode_bahan === action.payload;
      });
      dispatch(setDataMasterBahanEdit({ dataEdit: dataMasterBahanFilter }));
    }
  };

const addDataMasterBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_BAHAN) {
      const data = getState().form.FormTambahMasterBahan.values;
      delete data.kode_bahan;
      const response = await api.MasterBahan.addMasterBahan(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_BAHAN) {
      const data = {
        nama_bahan: action.payload.data,
      };
      const response = await api.MasterBahan.deleteMasterBahan(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_BAHAN) {
      const data = getState().form.FormTambahMasterBahan.values;
      const response = await api.MasterBahan.editMasterBahan(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterBahanGetAll,
  masterBahanGetDataID,
  addDataMasterBahan,
  deleteDataMasterBahan,
  editDataMasterBahan,
];

export default data;
