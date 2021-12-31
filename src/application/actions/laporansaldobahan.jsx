export const GET_ALL_LAPORAN_SALDO_BAHAN =
  "[laporansaldobahan] get all laporan saldo bahan";
export const SET_DATA_LAPORAN_SALDO_BAHAN_SUCCESS =
  "[laporansaldobahan] get all laporan saldo bahan success";
export const SET_DATA_LAPORAN_SALDO_BAHAN_FAILED =
  "[laporansaldobahan] get all laporan saldo bahan failed";

export const getAllLaporanSaldoBahan = {
  type: GET_ALL_LAPORAN_SALDO_BAHAN,
};
export const setDataLaporanSaldoBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_SALDO_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanSaldoBahanFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_SALDO_BAHAN_FAILED,
  payload: { data: error },
});
