import {
  setDataMasterCuttingBatuSuccess,
  setDataMasterCuttingBatuFailed,
  GET_ALL_MASTER_CUTTING_BATU,
  GET_MASTER_CUTTING_BATU_ID,
  setEditFormMasterCuttingBatu,
  setDataMasterCuttingBatuEdit,
  ADD_MASTER_CUTTING_BATU,
  DELETE_MASTER_CUTTING_BATU,
  EDIT_MASTER_CUTTING_BATU,
} from "../actions/mastercuttingbatu";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterCuttingBatuGetAll =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_CUTTING_BATU) {
      const response = await api.MasterCuttingBatu.getAllMasterCuttingBatu();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataMasterCuttingBatuSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataMasterCuttingBatuFailed({ error: response.error }));
      }
    }
  };

const masterCuttingBatuGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_CUTTING_BATU_ID) {
      dispatch(setEditFormMasterCuttingBatu(true));
      const dataMasterCuttingBatu = getState().mastercuttingbatu.feedback;
      const dataMasterCuttingBatuFilter = dataMasterCuttingBatu.filter(
        (item) => {
          return item.kode_cutting_batu === action.payload;
        }
      );
      dispatch(
        setDataMasterCuttingBatuEdit({ dataEdit: dataMasterCuttingBatuFilter })
      );
    }
  };

const addDataMasterCuttinBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_CUTTING_BATU) {
      const data = getState().form.FormTambahMasterCuttingBatu.values;
      const response = await api.MasterCuttingBatu.addMasterCuttingBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menambahkan Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const deleteDataMasterCuttinBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_CUTTING_BATU) {
      const data = {
        kode_cutting_batu: action.payload.data,
      };
      const response = await api.MasterCuttingBatu.deleteMasterCuttingBatu(
        data
      );
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Menghapus Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const editDataMasterCuttinBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_CUTTING_BATU) {
      const data = getState().form.FormTambahMasterCuttingBatu.values;
      const response = await api.MasterCuttingBatu.editMasterCuttingBatu(data);
      if (response.value?.status === "berhasil") {
        sweetalert.default.Success("Berhasil Merubah Data !");
        window.location.reload();
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };
  
const data = [
  masterCuttingBatuGetAll,
  masterCuttingBatuGetDataID,
  addDataMasterCuttinBatu,
  deleteDataMasterCuttinBatu,
  editDataMasterCuttinBatu,
];

export default data;
