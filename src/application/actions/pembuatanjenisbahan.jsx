export const GET_ALL_SALDO_BAHAN_STOCK =
  "[pembuatanjenisbahan] get all saldo bahan stock";
export const SET_DATA_SALDO_BAHAN_STOCK_SUCCESS =
  "[pembuatanjenisbahan] get all saldo bahan stock success";
export const SET_DATA_SALDO_BAHAN_STOCK_FAILED =
  "[pembuatanjenisbahan] get all saldo bahan stock failed";

export const ADD_DETAIL_JENIS_BAHAN =
  "[pembuatanjenisbahan] add detail jenis bahan";
export const ADD_DATA_DETAIL_JENIS_BAHAN_SUCCESS =
  "[pembuatanjenisbahan] add detail jenis bahan success";
export const ADD_DATA_DETAIL_JENIS_BAHAN_FAILED =
  "[pembuatanjenisbahan] add detail jenis bahan failed";

export const ADD_DETAIL_BAHAN = "[pembuatanjenisbahan] add detail bahan";
export const ADD_DATA_DETAIL_BAHAN_SUCCESS =
  "[pembuatanjenisbahan] add detail bahan success";
export const ADD_DATA_DETAIL_BAHAN_FAILED =
  "[pembuatanjenisbahan] add detail bahan failed";

export const ADD_PEMBUATAN_JENIS_BAHAN =
  "[pembuatanjenisbahan] add pembuatan jenis bahan";

export const getAllSaldoBahanStock = {
  type: GET_ALL_SALDO_BAHAN_STOCK,
};
export const setDataSaldoBahanStockSuccess = ({ feedback }) => ({
  type: SET_DATA_SALDO_BAHAN_STOCK_SUCCESS,
  payload: { data: feedback },
});
export const setDataSaldoBahanStockFailed = ({ error }) => ({
  type: SET_DATA_SALDO_BAHAN_STOCK_FAILED,
  payload: { data: error },
});

export const addDetailJenisBahan = {
  type: ADD_DETAIL_JENIS_BAHAN,
};
export const addDataDetailJenisBahanSuccess = ({ feedback }) => ({
  type: ADD_DATA_DETAIL_JENIS_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const addDataDetailJenisBahanFailed = ({ error }) => ({
  type: ADD_DATA_DETAIL_JENIS_BAHAN_FAILED,
  payload: { data: error },
});

export const addDetailBahan = {
  type: ADD_DETAIL_BAHAN,
};
export const addDataDetailBahanSuccess = ({ feedback }) => ({
  type: ADD_DATA_DETAIL_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const addDataDetailBahanFailed = ({ error }) => ({
  type: ADD_DATA_DETAIL_BAHAN_FAILED,
  payload: { data: error },
});

export const addPembuatanJenisBahan = {
  type: ADD_PEMBUATAN_JENIS_BAHAN,
};
