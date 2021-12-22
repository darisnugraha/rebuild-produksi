import {
  GET_ALL_MASTER_JENIS,
  setDataMasterJenisSuccess,
  setDataMasterJenisFailed,
  GET_MASTER_JENIS_ID,
  setEditFormMasterJenis,
  setDataMasterJenisEdit,
  ADD_MASTER_JENIS,
  DELETE_MASTER_JENIS,
  EDIT_MASTER_JENIS,
} from "../actions/masterjenis";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterjenisGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS) {
      const response = await api.masterjenis.getAllMasterJenis();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterJenisSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterJenisFailed({ error: response.error }));
      }
    }
  };

const masterjenisGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_JENIS_ID) {
      dispatch(setEditFormMasterJenis(true));
      const dataMasterJenis = getState().masterjenis.feedback;
      const dataMasterJenisFilter = dataMasterJenis.filter((item) => {
        return item.kode_jenis === action.payload;
      });
      dispatch(setDataMasterJenisEdit({ dataEdit: dataMasterJenisFilter }));
    }
  };

const addDataMasterJenis =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_JENIS) {
      const data = getState().form.FormTambahMasterJenis.values;
      const response = await api.masterjenis.addMasterJenis(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterJenis =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_JENIS) {
      const data = {
        kode_jenis: action.payload.data,
      };
      const response = await api.masterjenis.deleteMasterJenis(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterJenis =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_JENIS) {
      const data = getState().form.FormTambahMasterJenis.values;
      const response = await api.masterjenis.editMasterJenis(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterjenisGetAllData,
  masterjenisGetDataID,
  addDataMasterJenis,
  deleteDataMasterJenis,
  editDataMasterJenis,
];

export default data;
