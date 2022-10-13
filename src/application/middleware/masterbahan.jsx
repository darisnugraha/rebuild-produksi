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
      api.MasterBahan.getAllMasterBahan().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterBahanSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterBahanFailed({ error: res.error }));
        }
      });
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
      const id = action.payload;
      api.MasterBahan.getMasterBahanById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterBahanEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterBahanEdit({ dataEdit: [] }));
        }
      });
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
      data.kadar = parseFloat(data.kadar);
      api.MasterBahan.addMasterBahan(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const deleteDataMasterBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_BAHAN) {
      const id = action.payload.data;
      api.MasterBahan.deleteMasterBahan("/" + id).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menghapus Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menghapus Data !"
          );
        }
      });
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
      const id = data.id;
      delete data.id;
      data.kadar = parseFloat(data.kadar);
      api.MasterBahan.editMasterBahan("/" + id, data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Merubah Data !"
          );
        }
      });
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
