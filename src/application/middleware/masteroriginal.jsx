import {
  setDataMasterOriginalSuccess,
  setDataMasterOriginalFailed,
  GET_ALL_MASTER_ORIGINAL,
  GET_ALL_MASTER_ORIGINAL_BY_ID,
  setDataMasterOriginalByIdSuccess,
  setDataMasterOriginalByIdFailed,
  setEditFormMasterOriginal,
  ADD_MASTER_ORIGINAL,
  EDIT_MASTER_ORIGINAL,
  DELETE_MASTER_ORIGINAL,
} from "../actions/masteroriginal";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterOriginalGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_ORIGINAL) {
      api.MasterOriginal.getAllMasterOriginal().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterOriginalSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterOriginalFailed({ error: res.error }));
        }
      });
    }
    if (action.type === GET_ALL_MASTER_ORIGINAL_BY_ID) {
      dispatch(setEditFormMasterOriginal(true));
      const id = action.payload.data;
      api.MasterOriginal.getMasterOriginalById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterOriginalByIdSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterOriginalByIdFailed({ error: res.error }));
        }
      });
    }
  };

const addDataMasterOriginal =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_ORIGINAL) {
      const data = getState().form.FormTambahMasterOriginal.values;
      data.nama_barang = data.nama_barang.toUpperCase();
      data.kode_barang = data.kode_barang.toUpperCase();
      api.MasterOriginal.addMasterOriginal(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
    if (action.type === EDIT_MASTER_ORIGINAL) {
      const data = getState().form.FormTambahMasterOriginal.values;
      const dataid = data.id;
      delete data.id;
      data.nama_barang = data.nama_barang.toUpperCase();
      data.kode_barang = data.kode_barang.toUpperCase();
      api.MasterOriginal.editMasterOriginal(dataid, data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Merubah Data !"
          );
        }
      });
    }
    if (action.type === DELETE_MASTER_ORIGINAL) {
      const id = action.payload.data;
      api.MasterOriginal.deleteMasterOriginal(id).then((res) => {
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

const data = [masterOriginalGetAll, addDataMasterOriginal];

export default data;
