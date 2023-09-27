export const GET_TUKANG_DIVISI = "[kirimbahancabang] get tukang divisi";
export const SET_TUKANG_DIVISI_SUCCESS =
  "[kirimbahancabang] get tukang divisi success";
export const SET_TUKANG_DIVISI_FAILED =
  "[kirimbahancabang] get tukang divisi failed";

export const GET_ALL_DIVISI = "[kirimbahancabang] get all divisi";
export const SET_DATA_DIVISI_SUCCESS =
  "[kirimbahancabang] get all divisi success";
export const SET_DATA_DIVISI_FAILED =
  "[kirimbahancabang] get all divisi failed";
export const ADD_KIRIM_BAHAN_ADMIN_BAHAN =
  "[kirimbahancabang] add kirim bahan admin bahan";

export const getTukangByDivisi = (divisi) => ({
  type: GET_TUKANG_DIVISI,
  payload: { data: divisi },
});
export const setTukangDivisiSuccess = ({ feedback }) => ({
  type: SET_TUKANG_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setTukangDivisiFailed = ({ error }) => ({
  type: SET_TUKANG_DIVISI_FAILED,
  payload: { data: error },
});

export const getAllDivisi = {
  type: GET_ALL_DIVISI,
};
export const setDataDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataDivisiFailed = ({ error }) => ({
  type: SET_DATA_DIVISI_FAILED,
  payload: { data: error },
});

export const addKirimBahanAdminBahan = {
  type: ADD_KIRIM_BAHAN_ADMIN_BAHAN,
};
