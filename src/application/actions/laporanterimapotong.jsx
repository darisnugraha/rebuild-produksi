export const GET_ALL_LAPORAN_TERIMA_POTONG =
  "[laporanterimapotong] get all laporan terima potong";
export const SET_DATA_LAPORAN_TERIMA_POTONG_SUCCESS =
  "[laporanterimapotong] get all laporan terima potong success";
export const SET_DATA_LAPORAN_TERIMA_POTONG_FAILED =
  "[laporanterimapotong] get all laporan terima potong failed";

export const getAllLaporanTerimaPotong = {
  type: GET_ALL_LAPORAN_TERIMA_POTONG,
};
export const setDataLaporanTerimaPotongSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_TERIMA_POTONG_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTerimaPotongFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_TERIMA_POTONG_FAILED,
  payload: { data: error },
});
