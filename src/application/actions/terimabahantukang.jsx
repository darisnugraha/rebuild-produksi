export const GET_ALL_DIVISI_ASAL_SALDO_BAHAN =
  "[terimabahantukang] get all divisi asal";
export const SET_DATA_DIVISI_ASAL_SALDO_BAHAN_SUCCESS =
  "[terimabahantukang] get all divisi asal success";
export const SET_DATA_DIVISI_ASAL_SALDO_BAHAN_FAILED =
  "[terimabahantukang] get all divisi asal failed";

export const getAllDivisiAsalSaldoBahan = {
  type: GET_ALL_DIVISI_ASAL_SALDO_BAHAN,
};
export const setDataDivisiAsalSaldoBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_DIVISI_ASAL_SALDO_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataDivisiAsalSaldoBahanFailed = ({ error }) => ({
  type: SET_DATA_DIVISI_ASAL_SALDO_BAHAN_FAILED,
  payload: { data: error },
});
