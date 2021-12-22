import {
  setDataMasterKondisiSuccess,
  setDataMasterKondisiFailed,
  GET_ALL_MASTER_KONDISI,
  GET_MASTER_KONDISI_ID,
  setEditFormMasterKondisi,
  setDataMasterKondisiEdit,
  ADD_MASTER_KONDISI,
  DELETE_MASTER_KONDISI,
  EDIT_MASTER_KONDISI,
} from "../actions/masterkondisi";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterKondisiGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_KONDISI) {
      const response = await api.MasterKondisi.getAllMasterKondisi();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterKondisiSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterKondisiFailed({ error: response.error }));
      }
    }
  };

const masterKondisiGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_KONDISI_ID) {
      dispatch(setEditFormMasterKondisi(true));
      const dataMasterKondisi = getState().masterkondisi.feedback;
      const dataMasterKondisiFilter = dataMasterKondisi.filter((item) => {
        return item.kondisi === action.payload;
      });
      dispatch(setDataMasterKondisiEdit({ dataEdit: dataMasterKondisiFilter }));
    }
  };

const addDataMasterKondisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_KONDISI) {
      const data = getState().form.FormTambahMasterKondisi.values;
      delete data.kode_kondisi;
      const response = await api.MasterKondisi.addMasterKondisi(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterKondisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_KONDISI) {
      const data = {
        nama_kondisi: action.payload.data,
      };
      const response = await api.MasterKondisi.deleteMasterKondisi(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterKondisi =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_KONDISI) {
      const data = getState().form.FormTambahMasterKondisi.values;
      const response = await api.MasterKondisi.editMasterKondisi(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterKondisiGetAll,
  masterKondisiGetDataID,
  addDataMasterKondisi,
  deleteDataMasterKondisi,
  editDataMasterKondisi,
];

export default data;
