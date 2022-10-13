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
      api.MasterCuttingBatu.getAllMasterCuttingBatu().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterCuttingBatuSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterCuttingBatuFailed({ error: res.error }));
        }
      });
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
      const id = action.payload;
      api.MasterCuttingBatu.getMasterCuttingBatuById(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterCuttingBatuEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterCuttingBatuEdit({ dataEdit: [] }));
        }
      });
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
      api.MasterCuttingBatu.addMasterCuttingBatu(data).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menambahkan Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menambahkan Data !"
          );
        }
      });
    }
  };

const deleteDataMasterCuttinBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_CUTTING_BATU) {
      const id = action.payload.data;
      api.MasterCuttingBatu.deleteMasterCuttingBatu("/" + id).then((res) => {
        if (res.value) {
          sweetalert.default.Success("Berhasil Menghapus Data !");
        } else {
          sweetalert.default.Failed(
            res.error.data.message || "Gagal Menghapus Data !"
          );
        }
      });
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
      const id = data.id;
      const datakirim = {
        kode_cutting_batu: data.kode_cutting_batu,
        nama_cutting_batu: data.nama_cutting_batu,
      };
      api.MasterCuttingBatu.editMasterCuttingBatu("/" + id, datakirim).then(
        (res) => {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Merubah Data !");
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Gagal Merubah Data !"
            );
          }
        }
      );
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
