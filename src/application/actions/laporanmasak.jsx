export const GET_ALL_LAPORAN_KIRIM_MASAK =
  "[laporanmasak] get all laporan kirim masak";
export const SET_DATA_LAPORAN_KIRIM_MASAK_SUCCESS =
  "[laporanmasak] get all laporan kirim masak success";
export const SET_DATA_LAPORAN_KIRIM_MASAK_FAILED =
  "[laporanmasak] get all laporan kirim masak failed";

export const getAllLaporanKirimMasak = {
  type: GET_ALL_LAPORAN_KIRIM_MASAK,
};
export const setDataLaporanKirimMasakSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_KIRIM_MASAK_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanKirimMasakFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_KIRIM_MASAK_FAILED,
  payload: { data: error },
});

export const GET_ALL_LAPORAN_TERIMA_MASAK =
  "[laporanmasak] get all laporan terima masak";
export const SET_DATA_LAPORAN_TERIMA_MASAK_SUCCESS =
  "[laporanmasak] get all laporan terima masak success";
export const SET_DATA_LAPORAN_TERIMA_MASAK_FAILED =
  "[laporanmasak] get all laporan terima masak failed";

export const getAllLaporanTerimaMasak = {
  type: GET_ALL_LAPORAN_TERIMA_MASAK,
};
export const setDataLaporanTerimaMasakSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_TERIMA_MASAK_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTerimaMasakFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_TERIMA_MASAK_FAILED,
  payload: { data: error },
});
