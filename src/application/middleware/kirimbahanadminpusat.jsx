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
} from "../actions/kirimbahanadminpusat";
import * as sweetalert from "../../infrastructure/shared/sweetalert";

const getDataStockBahanDivisi =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STOCK_BAHAN_DIVISI) {
      const response = await api.KirimBahanAdminPusat.getAllStockBahanDivisi();
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataStockBahanDivisiSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataStockBahanDivisiFailed({ error: response.error }));
      }
    }
  };

const getDataStaffStockBahanDivisi =
  ({ api, log, writeLocal, getLocal, toast, sweetalert }) =>
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    next(action);
    if (action.type === GET_ALL_STAFF_STOCK_BAHAN_DIVISI) {
      const data = { divisi: localStorage.getItem("divisi") };
      const response = await api.KirimBahanAdminPusat.getStaffStockBahanDivisi({
        dataKirim: data,
      });
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataStaffStockBahanDivisiSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataStaffStockBahanDivisiFailed({ error: response.error }));
      }
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
      const response = await api.KirimBahanAdminPusat.getStockBahanByStaff({
        dataKirim: data,
      });
      if (response.value?.status === "berhasil") {
        dispatch(
          setDataStockBahanByStaffSuccess({ feedback: response.value.data })
        );
      } else {
        dispatch(setDataStockBahanByStaffFailed({ error: response.error }));
      }
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
        berat: data.berat_bahan,
        divisi: data.divisi,
        kode_jenis_bahan: data.nama_bahan,
        staff: data.staff,
      };
      const response = await api.KirimBahanAdminPusat.addKirimBahanAdminPusat(
        onSendData
      );
      if (response.value !== null) {
        if (response.value?.status === "berhasil") {
          sweetalert.default.Success(response.value.pesan);
        } else {
          sweetalert.default.Failed(response.value.pesan);
        }
      } else {
        sweetalert.default.Failed(response.error.data.pesan);
      }
    }
  };

const data = [
  getDataStockBahanDivisi,
  getDataStaffStockBahanDivisi,
  getDataStockBahanByStaff,
  addKirimBahan,
];

export default data;
