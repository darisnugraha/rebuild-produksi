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

export const GET_ALL_TERIMA_BATU_PRODUKSI =
  "[laporanproduksi] get all terima batu produksi";
export const SET_DATA_TERIMA_BATU_PRODUKSI_SUCCESS =
  "[laporanproduksi] get all terima batu produksi success";
export const SET_DATA_TERIMA_BATU_PRODUKSI_FAILED =
  "[laporanproduksi] get all terima batu produksi failed";

export const GET_ALL_OUTSTAND_PRODUKSI =
  "[laporanproduksi] get all outstand produksi";
export const SET_DATA_OUTSTAND_PRODUKSI_SUCCESS =
  "[laporanproduksi] get all outstand produksi success";
export const SET_DATA_OUTSTAND_PRODUKSI_FAILED =
  "[laporanproduksi] get all outstand produksi failed";

export const GET_ALL_TERIMA_GUDANG_PRODUKSI =
  "[laporanproduksi] get all terima gudang produksi";
export const SET_DATA_TERIMA_GUDANG_PRODUKSI_SUCCESS =
  "[laporanproduksi] get all terima gudang produksi success";
export const SET_DATA_TERIMA_GUDANG_PRODUKSI_FAILED =
  "[laporanproduksi] get all terima gudang produksi failed";

export const GET_DIVISI_GUDANG = "[laporanproduksi] get divisi gudang";
export const SET_DIVISI_GUDANG = "[laporanproduksi] set divisi gudang";

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

export const getAllTerimaBatuProduksi = {
  type: GET_ALL_TERIMA_BATU_PRODUKSI,
};
export const setDataTerimaBatuProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_BATU_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaBatuProduksiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_BATU_PRODUKSI_FAILED,
  payload: { data: error },
});

export const getAllOutstandProduksi = {
  type: GET_ALL_OUTSTAND_PRODUKSI,
};
export const setDataOutstandProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_OUTSTAND_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataOutstandProduksiFailed = ({ error }) => ({
  type: SET_DATA_OUTSTAND_PRODUKSI_FAILED,
  payload: { data: error },
});

export const getDivisiGudang = {
  type: GET_DIVISI_GUDANG,
};

export const setDivisiGudang = ({ feedback }) => ({
  type: SET_DIVISI_GUDANG,
  payload: { data: feedback },
});

export const getAllTerimaGudangProduksi = {
  type: GET_ALL_TERIMA_GUDANG_PRODUKSI,
};
export const setDataTerimaGudangProduksiSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_GUDANG_PRODUKSI_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaGudangProduksiFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_GUDANG_PRODUKSI_FAILED,
  payload: { data: error },
});
