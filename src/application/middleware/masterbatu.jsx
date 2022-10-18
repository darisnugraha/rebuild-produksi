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
      api.MasterBatu.getAllMasterBatu().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterBatuSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterBatuFailed({ error: res.error }));
        }
      });
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
      const id = action.payload;
      api.MasterBatu.getMasterBatuById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterBatuEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterBatuEdit({ dataEdit: [] }));
        }
      });
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
      // data.berat_batu = parseFloat(data.berat_batu);
      delete data.berat_batu;
      api.MasterBatu.addMasterBatu(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.messsage || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const deleteDataMasterBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_BATU) {
      const id = action.payload.data;
      api.MasterBatu.deleteMasterBatu("/" + id).then((res) => {
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

const editDataMasterBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_BATU) {
      const data = getState().form.FormTambahMasterBatu.values;
      data.berat_batu = parseFloat(data.berat_batu);
      const id = data.id;
      delete data.id;
      api.MasterBatu.editMasterBatu("/" + id, data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(res.error?.data.message);
        }
      });
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
