export const GET_ALL_LAPORAN_SETOR_ABU_POTONG =
  "[laporansetorabupotong] get all laporan setor abu potong";
export const SET_DATA_LAPORAN_SETOR_ABU_POTONG_SUCCESS =
  "[laporansetorabupotong] get all laporan setor abu potong success";
export const SET_DATA_LAPORAN_SETOR_ABU_POTONG_FAILED =
  "[laporansetorabupotong] get all laporan setor abu potong failed";

export const getAllLaporanSetorAbuPotong = {
  type: GET_ALL_LAPORAN_SETOR_ABU_POTONG,
};
export const setDataLaporanSetorAbuPotongSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_SETOR_ABU_POTONG_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanSetorAbuPotongFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_SETOR_ABU_POTONG_FAILED,
  payload: { data: error },
});
