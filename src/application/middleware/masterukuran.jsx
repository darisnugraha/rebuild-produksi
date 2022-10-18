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
      api.MasterUkuran.getAllMasterUkuran().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterUkuranSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterUkuranFailed({ error: res.error }));
        }
      });
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
      const id = action.payload;
      api.MasterUkuran.getMasterUkuranById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterUkuranEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterUkuranEdit({ dataEdit: [] }));
        }
      });
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
      api.MasterUkuran.addMasterUkuran(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const deleteDataMasterUkuran =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_UKURAN) {
      const id = action.payload.data;
      api.MasterUkuran.deleteMasterUkuran("/" + id).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menghapus Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menghapus Data !"
          );
        }
      });
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
      const id = data.id;
      delete data.id;
      api.MasterUkuran.editMasterUkuran("/" + id, data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Merubah Data !"
          );
        }
      });
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
