import {
  setDataMasterTukangSuccess,
  setDataMasterTukangFailed,
  GET_ALL_MASTER_TUKANG,
  GET_MASTER_TUKANG_ID,
  setEditFormMasterTukang,
  setDataMasterTukangEdit,
  ADD_MASTER_TUKANG,
  DELETE_MASTER_TUKANG,
  EDIT_MASTER_TUKANG,
} from "../actions/mastertukang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterTukangGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_TUKANG) {
      api.MasterTukang.getAllMasterTukang().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterTukangSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterTukangFailed({ error: res.error }));
        }
      });
    }
  };

const masterTukangGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_TUKANG_ID) {
      dispatch(setEditFormMasterTukang(true));
      const id = action.payload;
      api.MasterTukang.getMasterTukangById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterTukangEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterTukangEdit({ dataEdit: [] }));
        }
      });
    }
  };

const addDataMasterTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_TUKANG) {
      const data = getState().form.FormTambahMasterTukang.values;
      api.MasterTukang.addMasterTukang(data).then((res) => {
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

const deleteDataMasterTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_TUKANG) {
      const id = action.payload.data;
      api.MasterTukang.deleteMasterTukang("/" + id).then((res) => {
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

const editDataMasterTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_TUKANG) {
      const data = getState().form.FormTambahMasterTukang.values;
      const id = data.id;
      delete data.id;
      api.MasterTukang.editMasterTukang("/" + id, data).then((res) => {
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
  masterTukangGetAll,
  masterTukangGetDataID,
  addDataMasterTukang,
  deleteDataMasterTukang,
  editDataMasterTukang,
];

export default data;
