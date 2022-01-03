export const GET_ALL_LAPORAN_TAMBAH_SALDO_BAHAN =
  "[laporantambahsaldobahan] get all laporan tambah saldo bahan";
export const SET_DATA_LAPORAN_TAMBAH_SALDO_BAHAN_SUCCESS =
  "[laporantambahsaldobahan] get all laporan tambah saldo bahan success";
export const SET_DATA_LAPORAN_TAMBAH_SALDO_BAHAN_FAILED =
  "[laporantambahsaldobahan] get all laporan tambah saldo bahan failed";

export const getAllLaporanTambahSaldoBahan = {
  type: GET_ALL_LAPORAN_TAMBAH_SALDO_BAHAN,
};
export const setDataLaporanTambahSaldoBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_TAMBAH_SALDO_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTambahSaldoBahanFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_TAMBAH_SALDO_BAHAN_FAILED,
  payload: { data: error },
});
