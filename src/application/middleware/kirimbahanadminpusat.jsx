import {
  setDataStockBahanDivisiSuccess,
  setDataStockBahanDivisiFailed,
  GET_ALL_STOCK_BAHAN_DIVISI,
  GET_ALL_STAFF_STOCK_BAHAN_DIVISI,
  setDataStaffStockBahanDivisiSuccess,
  setDataStaffStockBahanDivisiFailed,
  GET_ALL_STOCK_BAHAN_BY_STAFF,
  setDataStockBahanByStaffSuccess,
  setDataStockBahanByStaffFailed,
  ADD_KIRIM_BAHAN,
  getAllStockBahanByStaff,
  setBeratBahan,
  SET_BERAT_BAHAN,
  GET_ALL_STAFF_STOCK_BAHAN_DIVISI_PROD,
  GET_DIVISI,
  ADD_KIRIM_BAHAN_PRODUKSI,
  GET_STAFF_BY_DIVISI,
  setDataStaffByDivisi,
} from "../actions/kirimbahanadminpusat";
import * as sweetalert from "../../infrastructure/shared/sweetalert";
import {
  setDataDivisiFailed,
  setDataDivisiSuccess,
} from "../actions/kirimbahanadmin";

const getDivisi =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_DIVISI) {
      api.KirimBahanAdminPusat.getAllDivisi().then((res) => {
        if (res.value !== null) {
          dispatch(setDataDivisiSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataDivisiFailed({ error: res.error }));
        }
      });
    }
    if (action.type === GET_STAFF_BY_DIVISI) {
      const divisi = action.payload.data;
      api.KirimBahanAdminPusat.getStaffByDivisi(divisi).then((res) => {
        if (res.value !== null) {
          dispatch(setDataStaffByDivisi({ feedback: res.value }));
        } else {
          dispatch(setDataStaffByDivisi({ feedback: [] }));
        }
      });
    }
  };

const getDataStockBahanDivisi =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STOCK_BAHAN_DIVISI) {
      api.KirimBahanAdminPusat.getAllStockBahanDivisi().then((res) => {
        if (res.value !== null) {
          dispatch(setDataStockBahanDivisiSuccess({ feedback: res.value }));
        } else {
          dispatch(setDataStockBahanDivisiFailed({ error: res.error }));
        }
      });
    }
  };

const getDataStaffStockBahanDivisi =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STAFF_STOCK_BAHAN_DIVISI) {
      const data = {
        divisi:
          getLocal("divisi").toUpperCase() === "ADMIN"
            ? "ADMIN PUSAT"
            : getLocal("divisi").toUpperCase(),
      };
      api.KirimBahanAdminPusat.getStaffStockBahanDivisi({
        dataKirim: data,
      }).then((res) => {
        if (res.value !== null) {
          dispatch(
            setDataStaffStockBahanDivisiSuccess({
              feedback: res.value,
            })
          );
          dispatch(getAllStockBahanByStaff({ staff: res.value[0]?._id }));
        } else {
          dispatch(setDataStaffStockBahanDivisiFailed({ error: res.error }));
        }
      });
    }
  };

const getDataStaffStockBahanDivisiProd =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STAFF_STOCK_BAHAN_DIVISI_PROD) {
      const data = { divisi: action.payload.data };
      console.log(data);
      api.KirimBahanAdminPusat.getStaffStockBahanDivisi({
        dataKirim: data,
      }).then((res) => {
        if (res.value !== null) {
          dispatch(
            setDataStaffStockBahanDivisiSuccess({
              feedback: res.value,
            })
          );
          dispatch(getAllStockBahanByStaff({ staff: res.value[0]?._id }));
        } else {
          dispatch(setDataStaffStockBahanDivisiFailed({ error: res.error }));
        }
      });
    }
  };

const getDataStockBahanByStaff =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STOCK_BAHAN_BY_STAFF) {
      const data = { staff: action.payload.data };
      api.KirimBahanAdminPusat.getStockBahanByStaff({
        dataKirim: data,
      }).then((res) => {
        if (res.value !== null) {
          dispatch(setDataStockBahanByStaffSuccess({ feedback: res.value }));
          dispatch(setBeratBahan({ berat: res.value[0]?.berat }));
        } else {
          dispatch(setDataStockBahanByStaffFailed({ error: res.error }));
        }
      });
    }
  };

const setBeratBahanAction =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === SET_BERAT_BAHAN) {
      console.log(action.payload.data);
      // dispatch(setBeratBahan({ berat: action.payload.data }));
    }
  };

const addKirimBahan =
  ({ api, log, writeLocal, getLocal, toast }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === ADD_KIRIM_BAHAN) {
      const data = getState().form.FormKirimBahanAdminPusat.values;
      const onSendData = {
        // berat: data.berat_bahan,
        // divisi: data.divisi,
        // kode_jenis_bahan: data.nama_bahan,
        // staff: data.staff,
        divisi_asal: data.divisi.toUpperCase(),
        divisi_tujuan: data.divisi_tujuan.toUpperCase(),
        tukang_asal: data.staff,
        tukang_tujuan: data.staff_tujuan,
        nama_bahan: data.nama_bahan,
        berat: parseFloat(data.berat_bahan),
      };
      api.KirimBahanAdminPusat.addKirimBahanAdminPusat(onSendData).then(
        (res) => {
          if (res.value !== null) {
            sweetalert.default.Success(
              res.value.message || "Berhasil Mengirimkan Data !"
            );
          } else {
            sweetalert.default.Failed(
              res.error.data.message || "Gagal Mengirimkan Data !"
            );
          }
        }
      );
    }
    if (action.type === ADD_KIRIM_BAHAN_PRODUKSI) {
      const data = getState().form.FormKirimBahan.values;
      if (data.berat_bahan === undefined) {
        sweetalert.default.Info("Mohon Isi Berat Bahan Terlebih Dahulu !");
      } else {
        const onSendData = {
          divisi_asal: data.divisi.toUpperCase(),
          divisi_tujuan: "ADMIN PUSAT",
          tukang_asal: data.staff,
          tukang_tujuan: data.staff_tujuan,
          nama_bahan: data.nama_bahan,
          berat: parseFloat(data.berat_bahan),
        };
        api.KirimBahanAdminPusat.addKirimBahanAdminPusat(onSendData).then(
          (res) => {
            if (res.value !== null) {
              sweetalert.default.Success(
                res.value.message || "Berhasil Mengirimkan Data !"
              );
            } else {
              sweetalert.default.Failed(
                res.error.data.message || "Gagal Mengirimkan Data !"
              );
            }
          }
        );
      }
    }
  };

const data = [
  getDivisi,
  getDataStaffStockBahanDivisiProd,
  getDataStockBahanDivisi,
  getDataStaffStockBahanDivisi,
  getDataStockBahanByStaff,
  addKirimBahan,
  setBeratBahanAction,
];

export default data;
