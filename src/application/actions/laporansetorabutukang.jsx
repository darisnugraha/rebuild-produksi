export const GET_ALL_LAPORAN_SETOR_ABU_TUKANG =
  "[laporansetorabutukang] get all laporan setor abu tukang";
export const SET_DATA_LAPORAN_SETOR_ABU_TUKANG_SUCCESS =
  "[laporansetorabutukang] get all laporan setor abu tukang success";
export const SET_DATA_LAPORAN_SETOR_ABU_TUKANG_FAILED =
  "[laporansetorabutukang] get all laporan setor abu tukang failed";

export const getAllLaporanSetorAbuTukang = {
  type: GET_ALL_LAPORAN_SETOR_ABU_TUKANG,
};
export const setDataLaporanSetorAbuTukangSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_SETOR_ABU_TUKANG_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanSetorAbuTukangFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_SETOR_ABU_TUKANG_FAILED,
  payload: { data: error },
});
