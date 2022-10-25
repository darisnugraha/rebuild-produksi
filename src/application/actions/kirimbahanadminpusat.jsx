export const GET_DIVISI = "[kirimbahanadminpusat] get all divisi";
export const SET_DATA_DIVISI_SUCCESS =
  "[kirimbahanadminpusat] get all divisi success";
export const SET_DATA_DIVISI_FAILED =
  "[kirimbahanadminpusat] get all divisi failed";

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

export const GET_ALL_STAFF_STOCK_BAHAN_DIVISI_PROD =
  "[kirimbahanadminpusat] get all stock bahan by staff prod";
export const SET_DATA_STAFF_STOCK_BAHAN_DIVISI_PROD_SUCCESS =
  "[kirimbahanadminpusat] get all stock bahan by staff prod success";
export const SET_DATA_STAFF_STOCK_BAHAN_DIVISI_PROD_FAILED =
  "[kirimbahanadminpusat] get all stock bahan by staff prod failed";

export const ADD_KIRIM_BAHAN = "[kirimbahanadminpusat] add kirim bahan";
export const ADD_KIRIM_BAHAN_PRODUKSI =
  "[kirimbahanadminpusat] add kirim bahan produksi";
export const SET_BERAT_BAHAN = "[kirimbahanadminpusat] set berat bahan";

export const GET_STAFF_BY_DIVISI = "[kirimbahanadminpusat] get staff by divisi";
export const SET_STAFF_BY_DIVISI = "[kirimbahanadminpusat] set staff by divisi";

export const SET_BAHAN_BY_TUKANG_ASAL =
  "[kirimbahanadminpusat] set get bahan by tukang asal";

export const getAllDivisi = {
  type: GET_DIVISI,
};
export const setDataDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataDivisiFailed = ({ error }) => ({
  type: SET_DATA_DIVISI_FAILED,
  payload: { data: error },
});

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

export const getAllStaffStockBahanDivisiProd = (divisi) => ({
  type: GET_ALL_STAFF_STOCK_BAHAN_DIVISI_PROD,
  payload: { data: divisi },
});
export const setDataStaffStockBahanDivisiProdSuccess = ({ feedback }) => ({
  type: SET_DATA_STAFF_STOCK_BAHAN_DIVISI_PROD_SUCCESS,
  payload: { data: feedback },
});
export const setDataStaffStockBahanDivisiProdFailed = ({ error }) => ({
  type: SET_DATA_STAFF_STOCK_BAHAN_DIVISI_PROD_FAILED,
  payload: { data: error },
});

export const getAllStockBahanByStaff = ({ staff }) => ({
  type: GET_ALL_STOCK_BAHAN_BY_STAFF,
  payload: { data: staff },
});

export const setBeratBahan = ({ berat }) => ({
  type: SET_BERAT_BAHAN,
  payload: { data: berat },
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

export const addKirimBahanProduksi = {
  type: ADD_KIRIM_BAHAN_PRODUKSI,
};

export const getDataStaffByDivisi = (divisi) => ({
  type: GET_STAFF_BY_DIVISI,
  payload: { data: divisi },
});

export const setDataStaffByDivisi = ({ feedback }) => ({
  type: SET_STAFF_BY_DIVISI,
  payload: { data: feedback },
});

export const setBahanByTukangAsal = ({ feedback }) => ({
  type: SET_BAHAN_BY_TUKANG_ASAL,
  payload: { data: feedback },
});
