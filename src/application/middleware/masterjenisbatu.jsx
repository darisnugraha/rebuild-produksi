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
      api.MasterJenisBatu.getAllMasterJenisBatu().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterJenisBatuSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterJenisBatuFailed({ error: res.error }));
        }
      });
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
      const id = action.payload;
      api.MasterJenisBatu.getMasterJenisBatuByID(id).then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterJenisBatuEdit({ dataEdit: res.value }));
        } else {
          dispatch(setDataMasterJenisBatuEdit({ dataEdit: [] }));
        }
      });
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
      data.kode_jenis_batu = data.kode_jenis_batu.toUpperCase();
      data.nama_jenis_batu = data.nama_jenis_batu.toUpperCase();
      api.MasterJenisBatu.addMasterJenisBatu(data).then((res) => {
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

const deleteDataMasterJenisBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_JENIS_BATU) {
      const id = action.payload.data;
      api.MasterJenisBatu.deleteMasterJenisBatu("/" + id).then((res) => {
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

const editDataMasterJenisBatu =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_JENIS_BATU) {
      const data = getState().form.FormTambahMasterJenisBatu.values;
      const id = data.id;
      const data_kirim = {
        kode_jenis_batu: data.kode_jenis_batu.toUpperCase(),
        nama_jenis_batu: data.nama_jenis_batu.toUpperCase(),
      };
      api.MasterJenisBatu.editMasterJenisBatu("/" + id, data_kirim).then(
        (res) => {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Merubah Data !");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Merubah Data !"
            );
          }
        }
      );
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
