import {
  GET_ALL_MASTER_JENIS_BAHAN,
  setDataMasterJenisBahanFailed,
  GET_MASTER_JENIS_BAHAN_ID,
  setEditFormMasterJenisBahan,
  setDataMasterJenisBahanEdit,
  setDataMasterJenisBahanSuccess,
  DELETE_MASTER_JENIS_BAHAN,
  ADD_MASTER_JENIS_BAHAN,
  EDIT_MASTER_JENIS_BAHAN,
} from "../actions/masterjenisbahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterjenisbahanGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS_BAHAN) {
      const response = await api.MasterJenisBahan.getAllMasterJenisBahan();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterJenisBahanSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterJenisBahanFailed({ error: response.error }));
      }
    }
  };

const masterjenisbahanGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_JENIS_BAHAN_ID) {
      dispatch(setEditFormMasterJenisBahan(true));
      const dataMasterJenisBahan = getState().masterjenisbahan.feedback;
      const dataMasterJenisBahanFilter = dataMasterJenisBahan.filter((item) => {
        return item.kode_jenis_bahan === action.payload;
      });
      dispatch(
        setDataMasterJenisBahanEdit({ dataEdit: dataMasterJenisBahanFilter })
      );
    }
  };

const addDataMasterJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_JENIS_BAHAN) {
      const data = getState().form.FormTambahMasterJenisBahan.values;
      const response = await api.MasterJenisBahan.addMasterJenisBahan(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_JENIS_BAHAN) {
      const data = {
        kode_jenis_bahan: action.payload.data,
      };
      const response = await api.MasterJenisBahan.deleteMasterJenisBahan(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_JENIS_BAHAN) {
      const data = getState().form.FormTambahMasterJenisBahan.values;
      const response = await api.MasterJenisBahan.editMasterJenisBahan(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterjenisbahanGetAllData,
  masterjenisbahanGetDataID,
  addDataMasterJenisBahan,
  deleteDataMasterJenisBahan,
  editDataMasterJenisBahan,
];

export default data;
