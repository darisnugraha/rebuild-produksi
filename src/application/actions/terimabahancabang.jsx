export const GET_ALL_CABANG = "[terimabahancabang] get all cabang";
export const SET_ALL_CABANG = "[terimabahancabang] set all cabang";
export const GET_SALDO_KIRIM_BAHAN_CABANG =
  "[terimabahancabang] get saldo kirim bahan cabang";
export const SET_SALDO_KIRIM_BAHAN_CABANG =
  "[terimabahancabang] set saldo kirim bahan cabang";
export const GET_DETAIL_KIRIM_BAHAN_CABANG =
  "[terimabahancabang] get detail kirim bahan cabang";
export const SET_DETAIL_KIRIM_BAHAN_CABANG =
  "[terimabahancabang] set detail kirim bahan cabang";

export const SEND_TERIMA_BAHAN_CABANG =
  "[terimabahancabang] send terima bahan cabang";

export const getAllCabang = {
  type: GET_ALL_CABANG,
};
export const setAllCabang = (feedback) => ({
  type: SET_ALL_CABANG,
  payload: { data: feedback },
});
export const getSaldoKirimBahanCabang = (cabang) => ({
  type: GET_SALDO_KIRIM_BAHAN_CABANG,
  payload: { data: cabang },
});
export const setSaldoKirimBahanCabang = (feedback) => ({
  type: SET_SALDO_KIRIM_BAHAN_CABANG,
  payload: { data: feedback },
});
export const getDetailKirimBahanCabang = (noMutasi) => ({
  type: GET_DETAIL_KIRIM_BAHAN_CABANG,
  payload: { data: noMutasi },
});
export const setDetailKirimBahanCabang = (feedback) => ({
  type: SET_DETAIL_KIRIM_BAHAN_CABANG,
  payload: { data: feedback },
});

export const sendTerimaBahanCabang = {
  type: SEND_TERIMA_BAHAN_CABANG,
};
