export const GET_ALL_LAPORAN_KIRIM_BATU =
  "[laporankirimbatu] get all laporan kirim batu";
export const SET_DATA_LAPORAN_KIRIM_BATU_SUCCESS =
  "[laporankirimbatu] get all laporan kirim batu success";
export const SET_DATA_LAPORAN_KIRIM_BATU_FAILED =
  "[laporankirimbatu] get all laporan kirim batu failed";

export const getAllLaporanKirimBatu = {
  type: GET_ALL_LAPORAN_KIRIM_BATU,
};
export const setDataLaporanKirimBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanKirimBatuFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_KIRIM_BATU_FAILED,
  payload: { data: error },
});
