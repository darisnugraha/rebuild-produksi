export const GET_ALL_LAPORAN_KIRIM_TAMBAHAN =
  "[laporankirimbtambahan] get all laporan kirim tambahan";
export const SET_DATA_LAPORAN_KIRIM_TAMBAHAN_SUCCESS =
  "[laporankirimbtambahan] get all laporan kirim tambahan success";
export const SET_DATA_LAPORAN_KIRIM_TAMBAHAN_FAILED =
  "[laporankirimbtambahan] get all laporan kirim tambahan failed";

export const getAllLaporanKirimTambahan = {
  type: GET_ALL_LAPORAN_KIRIM_TAMBAHAN,
};
export const setDataLaporanKirimTambahanSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_KIRIM_TAMBAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanKirimTambahanFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_KIRIM_TAMBAHAN_FAILED,
  payload: { data: error },
});
