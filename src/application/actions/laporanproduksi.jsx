export const GET_ALL_TERIMA_PRODUKSI =
  "[laporanproduksi] get all terima produksi";
export const SET_DATA_TERIMA_PRODUKSI_SUCCESS =
  "[laporanproduksi] get all terima produksi success";
export const SET_DATA_TERIMA_PRODUKSI_FAILED =
  "[laporanproduksi] get all terima produksi failed";

export const GET_ALL_KIRIM_PRODUKSI =
  "[laporanproduksi] get all kirim produksi";
export const SET_DATA_KIRIM_PRODUKSI_SUCCESS =
  "[laporanproduksi] get all kirim produksi success";
export const SET_DATA_KIRIM_PRODUKSI_FAILED =
  "[laporanproduksi] get all kirim produksi failed";

export const GET_ALL_TERIMA_TAMBAHAN_PRODUKSI =
  "[laporanproduksi] get all terima tambahan produksi";
export const SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_SUCCESS =
  "[laporanproduksi] get all terima tambahan produksi success";
export const SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_FAILED =
  "[laporanproduksi] get all terima tambahan produksi failed";

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

export const getAllKirimProduksi = {
  type: GET_ALL_KIRIM_PRODUKSI,
};
export const setDataKirimProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimProduksiFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_PRODUKSI_FAILED,
  payload: { data: error },
});

export const getAllTerimaTambahanProduksi = {
  type: GET_ALL_TERIMA_TAMBAHAN_PRODUKSI,
};
export const setDataTerimaTambahanProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaTambahanProduksiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_TAMBAHAN_PRODUKSI_FAILED,
  payload: { data: error },
});
