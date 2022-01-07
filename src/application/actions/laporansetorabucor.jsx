export const GET_ALL_LAPORAN_SETOR_ABU_COR =
  "[laporansetorabucor] get all laporan setor abu cor";
export const SET_DATA_LAPORAN_SETOR_ABU_COR_SUCCESS =
  "[laporansetorabucor] get all laporan setor abu cor success";
export const SET_DATA_LAPORAN_SETOR_ABU_COR_FAILED =
  "[laporansetorabucor] get all laporan setor abu cor failed";

export const getAllLaporanSetorAbuCor = {
  type: GET_ALL_LAPORAN_SETOR_ABU_COR,
};
export const setDataLaporanSetorAbuCorSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_SETOR_ABU_COR_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanSetorAbuCorFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_SETOR_ABU_COR_FAILED,
  payload: { data: error },
});
