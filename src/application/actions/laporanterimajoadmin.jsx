export const GET_ALL_LAPORAN_TERIMA_JO_ADMIN =
  "[laporanterimajoadmin] get all laporan terima jo admin";
export const SET_DATA_LAPORAN_TERIMA_JO_ADMIN_SUCCESS =
  "[laporanterimajoadmin] get all laporan terima jo admin success";
export const SET_DATA_LAPORAN_TERIMA_JO_ADMIN_FAILED =
  "[laporanterimajoadmin] get all laporan terima jo admin failed";

export const getAllLaporanTerimaJoAdmin = {
  type: GET_ALL_LAPORAN_TERIMA_JO_ADMIN,
};
export const setDataLaporanTerimaJoAdminSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_TERIMA_JO_ADMIN_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTerimaJoAdminFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_TERIMA_JO_ADMIN_FAILED,
  payload: { data: error },
});
