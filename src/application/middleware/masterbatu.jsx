import {
  setDataMasterBatuSuccess,
  setDataMasterBatuFailed,
  GET_ALL_MASTER_BATU,
  GET_MASTER_BATU_ID,
  setEditFormMasterBatu,
  setDataMasterBatuEdit,
  ADD_MASTER_BATU,
  DELETE_MASTER_BATU,
  EDIT_MASTER_BATU,
} from "../actions/masterbatu";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterBatuGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_BATU) {
      const response = await api.MasterBatu.getAllMasterBatu();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterBatuSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterBatuFailed({ error: response.error }));
      }
    }
  };

const masterBatuGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_BATU_ID) {
      dispatch(setEditFormMasterBatu(true));
      const dataMasterBatu = getState().masterbatu.feedback;
      const dataMasterBatuFilter = dataMasterBatu.filter((item) => {
        return item.kode_batu === action.payload;
      });
      dispatch(setDataMasterBatuEdit({ dataEdit: dataMasterBatuFilter }));
    }
  };

const addDataMasterBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_BATU) {
      const data = getState().form.FormTambahMasterBatu.values;
      data.berat_batu = parseFloat(data.berat_batu);
      const response = await api.MasterBatu.addMasterBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_BATU) {
      const data = {
        kode_batu: action.payload.data,
      };
      const response = await api.MasterBatu.deleteMasterBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_BATU) {
      const data = getState().form.FormTambahMasterBatu.values;
      data.berat_batu = parseFloat(data.berat_batu);
      const response = await api.MasterBatu.editMasterBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };
const data = [
  masterBatuGetAll,
  masterBatuGetDataID,
  addDataMasterBatu,
  deleteDataMasterBatu,
  editDataMasterBatu,
];

export default data;
