import {
  setDataMasterJenisBatuSuccess,
  setDataMasterJenisBatuFailed,
  GET_ALL_MASTER_JENIS_BATU,
  GET_MASTER_JENIS_BATU_ID,
  setEditFormMasterJenisBatu,
  setDataMasterJenisBatuEdit,
  ADD_MASTER_JENIS_BATU,
  DELETE_MASTER_JENIS_BATU,
  EDIT_MASTER_JENIS_BATU,
} from "../actions/masterjenisbatu";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterJenisBatuGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS_BATU) {
      const response = await api.MasterJenisBatu.getAllMasterJenisBatu();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterJenisBatuSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterJenisBatuFailed({ error: response.error }));
      }
    }
  };

const masterJenisBatuGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_JENIS_BATU_ID) {
      dispatch(setEditFormMasterJenisBatu(true));
      const dataMasterJenisBatu = getState().masterjenisbatu.feedback;
      const dataMasterJenisBatuFilter = dataMasterJenisBatu.filter((item) => {
        return item.kode_jenis_batu === action.payload;
      });
      dispatch(
        setDataMasterJenisBatuEdit({ dataEdit: dataMasterJenisBatuFilter })
      );
    }
  };
const addDataMasterJenisBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_JENIS_BATU) {
      const data = getState().form.FormTambahMasterJenisBatu.values;
      const response = await api.MasterJenisBatu.addMasterJenisBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterJenisBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_JENIS_BATU) {
      const data = {
        kode_jenis_batu: action.payload.data,
      };
      const response = await api.MasterJenisBatu.deleteMasterJenisBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterJenisBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_JENIS_BATU) {
      const data = getState().form.FormTambahMasterJenisBatu.values;
      const response = await api.MasterJenisBatu.editMasterJenisBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  masterJenisBatuGetAll,
  masterJenisBatuGetDataID,
  addDataMasterJenisBatu,
  deleteDataMasterJenisBatu,
  editDataMasterJenisBatu,
];

export default data;
