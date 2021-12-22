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
      const response = await api.MasterMarketing.getAllMasterMarketing();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterMarketingSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterMarketingFailed({ error: response.error }));
      }
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
      const dataMasterMarketing = getState().mastermarketing.feedback;
      const dataMasterMarketingFilter = dataMasterMarketing.filter((item) => {
        return item.kode_marketing === action.payload;
      });
      dispatch(
        setDataMasterMarketingEdit({ dataEdit: dataMasterMarketingFilter })
      );
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
      const response = await api.MasterMarketing.addMasterMarketing(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterMarketing =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_MARKETING) {
      const data = {
        kode_marketing: action.payload.data,
      };
      const response = await api.MasterMarketing.deleteMasterMarketing(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
      const response = await api.MasterMarketing.editMasterMarketing(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
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
