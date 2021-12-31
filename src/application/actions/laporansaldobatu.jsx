export const GET_ALL_LAPORAN_SALDO_BATU =
  "[laporansaldobatu] get all laporan saldo batu";
export const SET_DATA_LAPORAN_SALDO_BATU_SUCCESS =
  "[laporansaldobatu] get all laporan saldo batu success";
export const SET_DATA_LAPORAN_SALDO_BATU_FAILED =
  "[laporansaldobatu] get all laporan saldo batu failed";

export const getAllLaporanSaldoBatu = {
  type: GET_ALL_LAPORAN_SALDO_BATU,
};
export const setDataLaporanSaldoBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_SALDO_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanSaldoBatuFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_SALDO_BATU_FAILED,
  payload: { data: error },
});
