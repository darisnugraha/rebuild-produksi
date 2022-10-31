import {
  setDataMasterStatusSuccess,
  setDataMasterStatusFailed,
  GET_ALL_MASTER_STATUS,
  GET_MASTER_STATUS_ID,
  setEditFormMasterStatus,
  setDataMasterStatusEdit,
  ADD_MASTER_STATUS,
  DELETE_MASTER_STATUS,
  EDIT_MASTER_STATUS,
} from "../actions/masterstatus";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterStatusGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_STATUS) {
      api.MasterStatus.getAllMasterStatus().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterStatusSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterStatusFailed({ error: res.error }));
        }
      });
    }
  };

const masterStatusGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_STATUS_ID) {
      dispatch(setEditFormMasterStatus(true));
      const id = action.payload;
      api.MasterStatus.getMasterStatusById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterStatusEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterStatusEdit({ dataEdit: [] }));
        }
      });
    }
  };

const addDataMasterStatus =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_STATUS) {
      const data = getState().form.FormTambahMasterStatus.values;
      data.kode_status_job_order = data.kode_status_job_order.toUpperCase();
      data.nama_status_job_order = data.nama_status_job_order.toUpperCase();
      api.MasterStatus.addMasterStatus(data).then((res) => {
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

const deleteDataMasterStatus =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_STATUS) {
      const id = action.payload.data;
      api.MasterStatus.deleteMasterStatus("/" + id).then((res) => {
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

const editDataMasterStatus =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_STATUS) {
      const data = getState().form.FormTambahMasterStatus.values;
      const id = data.id;
      delete data.id;
      data.kode_status_job_order = data.kode_status_job_order.toUpperCase();
      data.nama_status_job_order = data.nama_status_job_order.toUpperCase();
      api.MasterStatus.editMasterStatus("/" + id, data).then((res) => {
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
  masterStatusGetAll,
  masterStatusGetDataID,
  addDataMasterStatus,
  deleteDataMasterStatus,
  editDataMasterStatus,
];

export default data;
