export const GET_ALL_DIVISI = "[kirimbahanadminbahan] get all divisi";
export const SET_DATA_DIVISI_SUCCESS =
  "[kirimbahanadminbahan] get all divisi success";
export const SET_DATA_DIVISI_FAILED =
  "[kirimbahanadminbahan] get all divisi failed";
export const ADD_KIRIM_BAHAN_ADMIN_BAHAN =
  "[kirimbahanadminbahan] add kirim bahan admin bahan";

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
