export const GET_ALL_STOCK_BAHAN_DIVISI =
  "[kirimbahanadminpusat] get all stock bahan divisi";
export const SET_DATA_STOCK_BAHAN_DIVISI_SUCCESS =
  "[kirimbahanadminpusat] get all stock bahan divisi success";
export const SET_DATA_STOCK_BAHAN_DIVISI_FAILED =
  "[kirimbahanadminpusat] get all stock bahan divisi failed";

export const GET_ALL_STAFF_STOCK_BAHAN_DIVISI =
  "[kirimbahanadminpusat] get all staff stock bahan divisi";
export const SET_DATA_STAFF_STOCK_BAHAN_DIVISI_SUCCESS =
  "[kirimbahanadminpusat] get all staff stock bahan divisi success";
export const SET_DATA_STAFF_STOCK_BAHAN_DIVISI_FAILED =
  "[kirimbahanadminpusat] get all staff stock bahan divisi failed";

export const GET_ALL_STOCK_BAHAN_BY_STAFF =
  "[kirimbahanadminpusat] get all stock bahan by staff";
export const SET_DATA_STOCK_BAHAN_BY_STAFF_SUCCESS =
  "[kirimbahanadminpusat] get all stock bahan by staff success";
export const SET_DATA_STOCK_BAHAN_BY_STAFF_FAILED =
  "[kirimbahanadminpusat] get all stock bahan by staff failed";

export const ADD_KIRIM_BAHAN = "[kirimbahanadminpusat] add kirim bahan";

export const getAllStockBahanDivisi = {
  type: GET_ALL_STOCK_BAHAN_DIVISI,
};
export const setDataStockBahanDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_STOCK_BAHAN_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataStockBahanDivisiFailed = ({ error }) => ({
  type: SET_DATA_STOCK_BAHAN_DIVISI_FAILED,
  payload: { data: error },
});

export const getAllStaffStockBahanDivisi = {
  type: GET_ALL_STAFF_STOCK_BAHAN_DIVISI,
};
export const setDataStaffStockBahanDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_STAFF_STOCK_BAHAN_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataStaffStockBahanDivisiFailed = ({ error }) => ({
  type: SET_DATA_STAFF_STOCK_BAHAN_DIVISI_FAILED,
  payload: { data: error },
});

export const getAllStockBahanByStaff = ({ staff }) => ({
  type: GET_ALL_STOCK_BAHAN_BY_STAFF,
  payload: { data: staff },
});
export const setDataStockBahanByStaffSuccess = ({ feedback }) => ({
  type: SET_DATA_STOCK_BAHAN_BY_STAFF_SUCCESS,
  payload: { data: feedback },
});
export const setDataStockBahanByStaffFailed = ({ error }) => ({
  type: SET_DATA_STOCK_BAHAN_BY_STAFF_FAILED,
  payload: { data: error },
});

export const addKirimBahanAdminPusat = {
  type: ADD_KIRIM_BAHAN,
};
