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
      api.masterjenis.getAllMasterJenis().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterJenisSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterJenisFailed({ error: res.error }));
        }
      });
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
      const id = action.payload;
      api.masterjenis.getMasterJenisByID(id).then((res) => {
        dispatch(setDataMasterJenisEdit({ dataEdit: res.value }));
      });
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
      data.kode_jenis = data.kode_jenis?.toUpperCase();
      data.nama_jenis = data.nama_jenis?.toUpperCase();
      api.masterjenis.addMasterJenis(data).then((res) => {
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

const deleteDataMasterJenis =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_JENIS) {
      const id = action.payload.data;
      api.masterjenis.deleteMasterJenis("/" + id).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menghapus Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menghapus Data"
          );
        }
      });
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
      const id = data._id;
      const dataKirim = {
        kode_jenis: data.kode_jenis.toUpperCase(),
        nama_jenis: data.nama_jenis.toUpperCase(),
      };
      api.masterjenis.editMasterJenis("/" + id, dataKirim).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Mengupdate Data"
          );
        }
      });
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
