import {
  setDataMasterTukangSuccess,
  setDataMasterTukangFailed,
  GET_ALL_MASTER_TUKANG,
  GET_MASTER_TUKANG_ID,
  setEditFormMasterTukang,
  setDataMasterTukangEdit,
  ADD_MASTER_TUKANG,
  DELETE_MASTER_TUKANG,
  EDIT_MASTER_TUKANG,
} from "../actions/mastertukang";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterTukangGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_TUKANG) {
      const response = await api.MasterTukang.getAllMasterTukang();
      if (response.value?.status === "berhasil") {
        dispatch(setDataMasterTukangSuccess({ feedback: response.value.data }));
      } else {
        dispatch(setDataMasterTukangFailed({ error: response.error }));
      }
    }
  };

const masterTukangGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_TUKANG_ID) {
      dispatch(setEditFormMasterTukang(true));
      const dataMasterTukang = getState().mastertukang.feedback;
      const dataMasterTukangFilter = dataMasterTukang.filter((item) => {
        return item.kode_staff === action.payload;
      });
      dispatch(setDataMasterTukangEdit({ dataEdit: dataMasterTukangFilter }));
    }
  };

const addDataMasterTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_TUKANG) {
      const data = getState().form.FormTambahMasterTukang.values;
      const response = await api.MasterTukang.addMasterTukang(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_TUKANG) {
      const data = {
        kode_staff: action.payload.data,
      };
      const response = await api.MasterTukang.deleteMasterTukang(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterTukang =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_TUKANG) {
      const data = getState().form.FormTambahMasterTukang.values;
      const response = await api.MasterTukang.editMasterTukang(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterTukangGetAll,
  masterTukangGetDataID,
  addDataMasterTukang,
  deleteDataMasterTukang,
  editDataMasterTukang,
];

export default data;
