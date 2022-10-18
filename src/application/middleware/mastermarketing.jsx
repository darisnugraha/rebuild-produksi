import {
  setDataMasterMarketingSuccess,
  setDataMasterMarketingFailed,
  GET_ALL_MASTER_MARKETING,
  GET_MASTER_MARKETING_ID,
  setEditFormMasterMarketing,
  setDataMasterMarketingEdit,
  DELETE_MASTER_MARKETING,
  ADD_MASTER_MARKETING,
  EDIT_MASTER_MARKETING,
} from "../actions/mastermarketing";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterMarketingGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_MARKETING) {
      api.MasterMarketing.getAllMasterMarketing().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterMarketingSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterMarketingFailed({ error: res.error }));
        }
      });
    }
  };

const masterMarketingGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_MARKETING_ID) {
      dispatch(setEditFormMasterMarketing(true));
      const id = action.payload;
      api.MasterMarketing.getMasterMarketingById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterMarketingEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterMarketingEdit({ dataEdit: [] }));
        }
      });
    }
  };

const addDataMasterMarketing =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_MARKETING) {
      const data = getState().form.FormTambahMasterMarketing.values;
      api.MasterMarketing.addMasterMarketing(data).then((res) => {
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

const deleteDataMasterMarketing =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_MARKETING) {
      const id = action.payload.data;
      api.MasterMarketing.deleteMasterMarketing(id).then((res) => {
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

const editDataMasterMarketing =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_MARKETING) {
      const data = getState().form.FormTambahMasterMarketing.values;
      const id = data.id;
      delete data.id;
      api.MasterMarketing.editMasterMarketing(id, data).then((res) => {
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
  masterMarketingGetAll,
  masterMarketingGetDataID,
  addDataMasterMarketing,
  deleteDataMasterMarketing,
  editDataMasterMarketing,
];

export default data;
