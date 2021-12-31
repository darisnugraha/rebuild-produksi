export const GET_ALL_TAMBAH_AMBIL_SALDO_BATU =
  "[laporantambahambilsaldobatu] get all laporan tambah ambil saldo batu";
export const SET_DATA_TAMBAH_AMBIL_SALDO_BATU_SUCCESS =
  "[laporantambahambilsaldobatu] get all laporan tambah ambil saldo batu success";
export const SET_DATA_TAMBAH_AMBIL_SALDO_BATU_FAILED =
  "[laporantambahambilsaldobatu] get all laporan tambah ambil saldo batu failed";

export const getAllLaporanTambahAmbilSaldoBatu = {
  type: GET_ALL_TAMBAH_AMBIL_SALDO_BATU,
};
export const setDataLaporanTambahAmbilSaldoBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_TAMBAH_AMBIL_SALDO_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTambahAmbilSaldoBatuFailed = ({ error }) => ({
  type: SET_DATA_TAMBAH_AMBIL_SALDO_BATU_FAILED,
  payload: { data: error },
});
