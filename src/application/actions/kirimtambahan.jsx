export const GET_ALL_ASAL_STOCK_BAHAN =
  "[kirimtambahan] get all asal stock bahan";
export const SET_DATA_ASAL_STOCK_BAHAN_SUCCESS =
  "[kirimtambahan] get all asal stock bahan success";
export const SET_DATA_ASAL_STOCK_BAHAN_FAILED =
  "[kirimtambahan] get all asal stock bahan failed";
export const GET_STOCK_BAHAN_ADMIN =
  "[kirimtambahan] get all stock bahan admin";
export const SET_DATA_STOCK_BAHAN_ADMIN_SUCCESS =
  "[kirimtambahan] get all stock bahan admin success";
export const SET_DATA_STOCK_BAHAN_ADMIN_FAILED =
  "[kirimtambahan] get all stock bahan admin failed";
export const ADD_KIRIM_TAMBAHAN_CART = "[kirimtambahan] add kirim tambahan";
export const ADD_KIRIM_TAMBAHAN_DIVISI =
  "[kirimtambahan] add kirim tambahan divisi";
export const SET_DATA_KIRIM_TAMBAHAN_DIVISI_SUCCESS =
  "[kirimtambahan] get kirim tambahan divisi success";
export const SET_DATA_KIRIM_TAMBAHAN_DIVISI_FAILED =
  "[kirimtambahan] get kirim tambahan divisi failed";

export const getAllAsalStockBahan = {
  type: GET_ALL_ASAL_STOCK_BAHAN,
};
export const setDataAsalStockBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_ASAL_STOCK_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataAsalStockBahanFailed = ({ error }) => ({
  type: SET_DATA_ASAL_STOCK_BAHAN_FAILED,
  payload: { data: error },
});

export const getStockBahanAdminByStaff = ({ namaStaff }) => ({
  type: GET_STOCK_BAHAN_ADMIN,
  payload: { data: namaStaff },
});
export const setDataStockBahanAdminByStaffSuccess = ({ feedback }) => ({
  type: SET_DATA_STOCK_BAHAN_ADMIN_SUCCESS,
  payload: { data: feedback },
});
export const setDataStockBahanAdminByStaffFailed = ({ error }) => ({
  type: SET_DATA_STOCK_BAHAN_ADMIN_FAILED,
  payload: { data: error },
});

export const addKirimTambahanCart = {
  type: ADD_KIRIM_TAMBAHAN_CART,
};

export const addKirimTambahanDivisi = {
  type: ADD_KIRIM_TAMBAHAN_DIVISI,
};
export const setDataKirimTambahanDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_TAMBAHAN_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimTambahanDivisiFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_TAMBAHAN_DIVISI_FAILED,
  payload: { data: error },
});
