import {
  GET_ALL_MASTER_WARNA,
  setDataMasterWarnaSuccess,
  setDataMasterWarnaFailed,
  GET_MASTER_WARNA_ID,
  setEditFormMasterWarna,
  setDataMasterWarnaEdit,
  ADD_MASTER_WARNA,
  DELETE_MASTER_WARNA,
  EDIT_MASTER_WARNA,
} from "../actions/masterwarna";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterwarnaGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_WARNA) {
      api.MasterWarna.getAllMasterWarna().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterWarnaSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterWarnaFailed({ error: res.error }));
        }
      });
    }
  };

const masterwarnaGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_WARNA_ID) {
      dispatch(setEditFormMasterWarna(true));
      const id = action.payload;
      api.MasterWarna.getMasterWarnaByID(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterWarnaEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterWarnaEdit({ dataEdit: [] }));
        }
      });
    }
  };

const addDataMasterWarna =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_WARNA) {
      const data = getState().form.FormTambahMasterWarna.values;
      api.MasterWarna.addMasterWarna(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(res.error?.data.message);
        }
      });
    }
  };

const deleteDataMasterWarna =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_WARNA) {
      const id = action.payload.data;
      api.MasterWarna.deleteMasterWarna("/" + id).then((res) => {
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

const editDataMasterWarna =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_WARNA) {
      const data = getState().form.FormTambahMasterWarna.values;
      const id = data.id;
      const dataKirim = {
        kode_warna: data.kode_warna,
        nama_warna: data.nama_warna,
      };
      api.MasterWarna.editMasterWarna("/" + id, dataKirim).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(res.error?.data.message);
        }
      });
    }
  };

const data = [
  masterwarnaGetAllData,
  masterwarnaGetDataID,
  addDataMasterWarna,
  deleteDataMasterWarna,
  editDataMasterWarna,
];

export default data;
