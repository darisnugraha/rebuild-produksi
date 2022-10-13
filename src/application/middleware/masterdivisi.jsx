import {
  setDataMasterDivisiSuccess,
  setDataMasterDivisiFailed,
  GET_ALL_MASTER_DIVISI,
  GET_MASTER_DIVISI_ID,
  setDataMasterDivisiEdit,
  ADD_MASTER_DIVISI,
  DELETE_MASTER_DIVISI,
  EDIT_MASTER_DIVISI,
  setEditFormMasterDivisi,
} from "../actions/masterdivisi";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterDivisiGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_DIVISI) {
      api.MasterDivisi.getAllMasterDivisi().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterDivisiSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterDivisiFailed({ error: res.error }));
        }
      });
    }
  };

const masterDivisiGetByID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_DIVISI_ID) {
      dispatch(setEditFormMasterDivisi(true));
      const id = action.payload;
      api.MasterDivisi.getMasterDivisiByID(id).then((res) => {
        dispatch(setDataMasterDivisiEdit({ dataEdit: res.value }));
      });
    }
  };

const addDataMasterDivisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_DIVISI) {
      const data = getState().form.FormTambahMasterDivisi.values;
      delete data.kode_divisi;
      api.MasterDivisi.addMasterDivisi(data).then((res) => {
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

const deleteDataMasterDivisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_DIVISI) {
      const id = action.payload.data;
      api.MasterDivisi.deleteMasterDivisi("/" + id).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menghapus Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const editDataMasterDivisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_DIVISI) {
      const data = getState().form.FormTambahMasterDivisi.values;
      const id = data.id;
      api.MasterDivisi.editMasterDivisi("/" + id, data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const data = [
  masterDivisiGetAll,
  masterDivisiGetByID,
  addDataMasterDivisi,
  deleteDataMasterDivisi,
  editDataMasterDivisi,
];

export default data;
