export const GET_ALL_LAPORAN_KIRIM_LEBUR =
  "[laporanlebur] get all laporan kirim lebur";
export const SET_DATA_LAPORAN_KIRIM_LEBUR_SUCCESS =
  "[laporanlebur] get all laporan kirim lebur success";
export const SET_DATA_LAPORAN_KIRIM_LEBUR_FAILED =
  "[laporanlebur] get all laporan kirim lebur failed";

export const getAllLaporanKirimLebur = {
  type: GET_ALL_LAPORAN_KIRIM_LEBUR,
};
export const setDataLaporanKirimLeburSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_KIRIM_LEBUR_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanKirimLeburFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_KIRIM_LEBUR_FAILED,
  payload: { data: error },
});

export const GET_ALL_LAPORAN_TERIMA_LEBUR =
  "[laporanlebur] get all laporan terima lebur";
export const SET_DATA_LAPORAN_TERIMA_LEBUR_SUCCESS =
  "[laporanlebur] get all laporan terima lebur success";
export const SET_DATA_LAPORAN_TERIMA_LEBUR_FAILED =
  "[laporanlebur] get all laporan terima lebur failed";

export const getAllLaporanTerimaLebur = {
  type: GET_ALL_LAPORAN_TERIMA_LEBUR,
};
export const setDataLaporanTerimaLeburSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_TERIMA_LEBUR_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTerimaLeburFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_TERIMA_LEBUR_FAILED,
  payload: { data: error },
});
