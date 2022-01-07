export const GET_ALL_LAPORAN_SALDO_BAHAN_PUSAT =
  "[laporansaldobahanPusatpusat] get all laporan saldo bahan pusat";
export const SET_DATA_LAPORAN_SALDO_BAHAN_PUSAT_SUCCESS =
  "[laporansaldobahanPusatpusat] get all laporan saldo bahan pusat success";
export const SET_DATA_LAPORAN_SALDO_BAHAN_PUSAT_FAILED =
  "[laporansaldobahanpusat] get all laporan saldo bahan pusat failed";

export const getAllLaporanSaldoBahanPusat = {
  type: GET_ALL_LAPORAN_SALDO_BAHAN_PUSAT,
};
export const setDataLaporanSaldoBahanPusatSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_SALDO_BAHAN_PUSAT_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanSaldoBahanPusatFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_SALDO_BAHAN_PUSAT_FAILED,
  payload: { data: error },
});
