import {
  GET_ALL_MASTER_JENIS_BAHAN,
  setDataMasterJenisBahanFailed,
  GET_MASTER_JENIS_BAHAN_ID,
  setEditFormMasterJenisBahan,
  setDataMasterJenisBahanEdit,
  setDataMasterJenisBahanSuccess,
  DELETE_MASTER_JENIS_BAHAN,
  ADD_MASTER_JENIS_BAHAN,
  EDIT_MASTER_JENIS_BAHAN,
} from "../actions/masterjenisbahan";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const masterjenisbahanGetAllData =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_MASTER_JENIS_BAHAN) {
      api.MasterJenisBahan.getAllMasterJenisBahan().then((res) => {
        if (res.value !== null) {
          dispatch(setDataMasterJenisBahanSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataMasterJenisBahanFailed({ error: res.error }));
        }
      });
    }
  };

const masterjenisbahanGetDataID =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_MASTER_JENIS_BAHAN_ID) {
      dispatch(setEditFormMasterJenisBahan(true));
      const id = action.payload;
      api.MasterJenisBahan.getMasterJenisBahanById(id).then((res) => {
        if (res.value !== null) {
          dispatch(
            setDataMasterJenisBahanEdit({
              dataEdit: res.value,
            })
          );
        } else {
          dispatch(
            setDataMasterJenisBahanEdit({
              dataEdit: [],
            })
          );
        }
      });
    }
  };

const addDataMasterJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_MASTER_JENIS_BAHAN) {
      const data = getState().form.FormTambahMasterJenisBahan.values;
      const dataKirim = {
        kode_jenis_bahan: data.kode_jenis_bahan.toUpperCase(),
        nama_jenis_bahan: data.nama_jenis_bahan.toUpperCase(),
        kode_warna: data.kode_warna,
        kadar: parseFloat(data.kadar),
        kode_kelompok: data.kode_kelompok,
      };
      api.MasterJenisBahan.addMasterJenisBahan(dataKirim).then((res) => {
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

const deleteDataMasterJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === DELETE_MASTER_JENIS_BAHAN) {
      const id = action.payload.data;
      data.kode_jenis_bahan = data.kode_jenis_bahan?.toUpperCase();
      data.nama_jenis_bahan = data.nama_jenis_bahan?.toUpperCase();
      api.MasterJenisBahan.deleteMasterJenisBahan("/" + id).then((res) => {
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

const editDataMasterJenisBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === EDIT_MASTER_JENIS_BAHAN) {
      const data = getState().form.FormTambahMasterJenisBahan.values;
      const id = data.id;
      const dataKirim = {
        kode_jenis_bahan: data.kode_jenis_bahan.toUpperCase(),
        nama_jenis_bahan: data.nama_jenis_bahan.toUpperCase(),
        kode_warna: data.kode_warna,
        kadar: parseFloat(data.kadar),
        kode_kelompok: data.kode_kelompok,
      };
      api.MasterJenisBahan.editMasterJenisBahan("/" + id, dataKirim).then(
        (res) => {
          if (res.value !== null) {
            sweetalert.default.Success("Berhasil Merubah Data !");
          } else {
            sweetalert.default.Failed(res.error?.data.message);
          }
        }
      );
    }
  };

const data = [
  masterjenisbahanGetAllData,
  masterjenisbahanGetDataID,
  addDataMasterJenisBahan,
  deleteDataMasterJenisBahan,
  editDataMasterJenisBahan,
];

export default data;
