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
