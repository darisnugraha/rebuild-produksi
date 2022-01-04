export const GET_ALL_LAPORAN_KIRIM_BATU_PUSAT =
  "[laporankirimbatupusat] get all laporan kirim batu pusat";
export const SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_SUCCESS =
  "[laporankirimbatupusat] get all laporan kirim batu pusat success";
export const SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_FAILED =
  "[laporankirimbatupusat] get all laporan kirim batu pusat failed";

export const getAllLaporanKirimBatuPusat = {
  type: GET_ALL_LAPORAN_KIRIM_BATU_PUSAT,
};
export const setDataLaporanKirimBatuPusatSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanKirimBatuPusatFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_KIRIM_BATU_PUSAT_FAILED,
  payload: { data: error },
});
