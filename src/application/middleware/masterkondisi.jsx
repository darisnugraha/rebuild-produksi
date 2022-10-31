import {
  setDataMasterKondisiSuccess,
  setDataMasterKondisiFailed,
  GET_ALL_MASTER_KONDISI,
  GET_MASTER_KONDISI_ID,
  setEditFormMasterKondisi,
  setDataMasterKondisiEdit,
  ADD_MASTER_KONDISI,
  DELETE_MASTER_KONDISI,
  EDIT_MASTER_KONDISI,
} from "../actions/masterkondisi";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterKondisiGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_KONDISI) {
      api.MasterKondisi.getAllMasterKondisi().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterKondisiSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterKondisiFailed({ error: res.error }));
        }
      });
    }
  };

const masterKondisiGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_KONDISI_ID) {
      dispatch(setEditFormMasterKondisi(true));
      const id = action.payload;
      api.MasterKondisi.getMasterKondisiById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterKondisiEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterKondisiEdit({ dataEdit: [] }));
        }
      });
    }
  };

const addDataMasterKondisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_KONDISI) {
      const data = getState().form.FormTambahMasterKondisi.values;
      data.kode_kondisi = data.kode_kondisi.toUpperCase();
      data.nama_kondisi = data.nama_kondisi.toUpperCase();
      api.MasterKondisi.addMasterKondisi(data).then((res) => {
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

const deleteDataMasterKondisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_KONDISI) {
      const id = action.payload.data;
      api.MasterKondisi.deleteMasterKondisi("/" + id).then((res) => {
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

const editDataMasterKondisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_KONDISI) {
      const data = getState().form.FormTambahMasterKondisi.values;
      data.kode_kondisi = data.kode_kondisi.toUpperCase();
      data.nama_kondisi = data.nama_kondisi.toUpperCase();
      const id = data.id;
      delete data.id;
      api.MasterKondisi.editMasterKondisi("/" + id, data).then((res) => {
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
  masterKondisiGetAll,
  masterKondisiGetDataID,
  addDataMasterKondisi,
  deleteDataMasterKondisi,
  editDataMasterKondisi,
];

export default data;
