export const GET_ALL_TERIMA_PRODUKSI =
  "[laporanproduks] get all terima produksi";
export const SET_DATA_TERIMA_PRODUKSI_SUCCESS =
  "[laporanproduks] get all terima produksi success";
export const SET_DATA_TERIMA_PRODUKSI_FAILED =
  "[laporanproduks] get all terima produksi failed";

export const getAllTerimaProduksi = {
  type: GET_ALL_TERIMA_PRODUKSI,
};
export const setDataTerimaProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaProduksiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_PRODUKSI_FAILED,
  payload: { data: error },
});
