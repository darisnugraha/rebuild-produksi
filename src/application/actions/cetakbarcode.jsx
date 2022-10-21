export const GET_NO_INDUK_JOB_ORDER = "[cetakbarcode] get no induk job order";
export const SET_NO_INDUK_JOB_ORDER = "[cetakbarcode] set no induk job order";

export const getNoIndukJobOrder = {
  type: GET_NO_INDUK_JOB_ORDER,
};

export const setNoIndukJobOrder = (feedback) => ({
  type: SET_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const GET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[cetakbarcode] get data by no induk job order";
export const SET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[cetakbarcode] set data by no induk job order";

export const getDataByNoInduk = (noInduk) => ({
  type: GET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: noInduk },
});

export const setDataByNoInduk = (feedback) => ({
  type: SET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const GET_DATA_BY_NO_JO = "[cetakbarcode] get data by jo";
export const SET_DATA_BY_NO_JO = "[cetakbarcode] set data by jo";

export const getDataByNoJO = (noJO) => ({
  type: GET_DATA_BY_NO_JO,
  payload: { data: noJO },
});

export const setDataByNoJO = (feedback) => ({
  type: SET_DATA_BY_NO_JO,
  payload: { data: feedback },
});

export const ADD_DATA_CETAK_BARCODE = "[cetakbarcode] add data cetak barcode";
export const addCetakBarcode = {
  type: ADD_DATA_CETAK_BARCODE,
};
