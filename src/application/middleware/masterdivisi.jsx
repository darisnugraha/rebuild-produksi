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
      const response = await api.MasterDivisi.getAllMasterDivisi();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterDivisiSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterDivisiFailed({ error: response.error }));
      }
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
      const dataMasterDivisi = getState().masterdivisi.feedback;
      const dataMasterDivisiFilter = dataMasterDivisi.filter((item) => {
        return item.kode_divisi === action.payload;
      });
      dispatch(setDataMasterDivisiEdit({ dataEdit: dataMasterDivisiFilter }));
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
      const response = await api.MasterDivisi.addMasterDivisi(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterDivisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_DIVISI) {
      const data = {
        kode_divisi: action.payload.data,
      };
      const response = await api.MasterDivisi.deleteMasterDivisi(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
      const response = await api.MasterDivisi.editMasterDivisi(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
