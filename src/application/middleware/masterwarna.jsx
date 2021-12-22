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
      const response = await api.MasterWarna.getAllMasterWarna();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterWarnaSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterWarnaFailed({ error: response.error }));
      }
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
      const dataMasterWarna = getState().masterwarna.feedback;
      const dataMasterWarnaFilter = dataMasterWarna.filter((item) => {
        return item.kode_warna === action.payload;
      });
      dispatch(setDataMasterWarnaEdit({ dataEdit: dataMasterWarnaFilter }));
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
      const response = await api.MasterWarna.addMasterWarna(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterWarna =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_WARNA) {
      const data = {
        kode_warna: action.payload.data,
      };
      const response = await api.MasterWarna.deleteMasterWarna(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
      const response = await api.MasterWarna.editMasterWarna(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
