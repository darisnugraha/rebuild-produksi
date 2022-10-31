import {
  GET_ALL_MASTER_KELOMPOK_JENIS_BAHAN,
  setDataMasterKelompokJenisBahanFailed,
  GET_MASTER_KELOMPOK_JENIS_BAHAN_ID,
  setEditFormMasterKelompokJenisBahan,
  setDataMasterKelompokJenisBahanEdit,
  setDataMasterKelompokJenisBahanSuccess,
  DELETE_MASTER_KELOMPOK_JENIS_BAHAN,
  ADD_MASTER_KELOMPOK_JENIS_BAHAN,
  EDIT_MASTER_KELOMPOK_JENIS_BAHAN,
} from "../actions/masterkelompokjenisbahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterkelompokjenisbahanGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_KELOMPOK_JENIS_BAHAN) {
      api.MasterKelompokJenisBahan.getAllMasterKelompokJenisBahan().then(
        (res) => {
          if (res.value !== null) {
            dispatch(
              setDataMasterKelompokJenisBahanSuccess({ feedback: res.value })
            );
          } else {
            dispatch(
              setDataMasterKelompokJenisBahanFailed({ error: res.error })
            );
          }
        }
      );
    }
  };

const masterkelompokjenisbahanGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_KELOMPOK_JENIS_BAHAN_ID) {
      dispatch(setEditFormMasterKelompokJenisBahan(true));
      const id = action.payload;
      api.MasterKelompokJenisBahan.getMasterKelompokJenisBahanById(id).then(
        (res) => {
          if (res.value !== null) {
            dispatch(
              setDataMasterKelompokJenisBahanEdit({
                dataEdit: res.value,
              })
            );
          } else {
            dispatch(
              setDataMasterKelompokJenisBahanEdit({
                dataEdit: [],
              })
            );
          }
        }
      );
    }
  };

const addDataMasterKelompokJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_KELOMPOK_JENIS_BAHAN) {
      const data = getState().form.FormTambahMasterKelompokJenisBahan.values;
      data.kadar = parseFloat(data.kadar);
      data.kode_kelompok = data.kode_kelompok.toUpperCase();
      data.nama_kelompok = data.nama_kelompok.toUpperCase();
      api.MasterKelompokJenisBahan.addMasterKelompokJenisBahan(data).then(
        (res) => {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Menambahkan Data !");
          } else {
            sweetalert.default.Failed(
              res.error?.data.message || "Gagal Menambahkan Data !"
            );
          }
        }
      );
    }
  };

const deleteDataMasterKelompokJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_KELOMPOK_JENIS_BAHAN) {
      const id = action.payload.data;
      api.MasterKelompokJenisBahan.deleteMasterKelompokJenisBahan(
        "/" + id
      ).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Menghapus Data !");
        } else {
          sweetalert.default.Failed(
            res.error?.data.message || "Gagal Menghapus Data"
          );
        }
      });
    }
  };

const editDataMasterKelompokJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_KELOMPOK_JENIS_BAHAN) {
      const data = getState().form.FormTambahMasterKelompokJenisBahan.values;
      const id = data.id;
      const dataKirim = {
        kode_kelompok: data.kode_kelompok.toUpperCase(),
        nama_kelompok: data.nama_kelompok.toUpperCase(),
      };
      api.MasterKelompokJenisBahan.editMasterKelompokJenisBahan(
        "/" + id,
        dataKirim
      ).then((res) => {
        if (res.value !== null) {
          sweetalert.default.Success("Berhasil Merubah Data !");
        } else {
          sweetalert.default.Failed(res.error?.data.message);
        }
      });
    }
  };

const data = [
  masterkelompokjenisbahanGetAllData,
  masterkelompokjenisbahanGetDataID,
  addDataMasterKelompokJenisBahan,
  deleteDataMasterKelompokJenisBahan,
  editDataMasterKelompokJenisBahan,
];

export default data;
