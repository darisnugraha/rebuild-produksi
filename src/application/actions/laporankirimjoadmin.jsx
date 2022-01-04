export const GET_ALL_LAPORAN_KIRIM_JO_ADMIN =
  "[laporankirimjoadmin] get all laporan kirim jo admin";
export const SET_DATA_LAPORAN_KIRIM_JO_ADMIN_SUCCESS =
  "[laporankirimjoadmin] get all laporan kirim jo admin success";
export const SET_DATA_LAPORAN_KIRIM_JO_ADMIN_FAILED =
  "[laporankirimjoadmin] get all laporan kirim jo admin failed";

export const getAllLaporanKirimJoAdmin = {
  type: GET_ALL_LAPORAN_KIRIM_JO_ADMIN,
};
export const setDataLaporanKirimJoAdminSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_KIRIM_JO_ADMIN_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanKirimJoAdminFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_KIRIM_JO_ADMIN_FAILED,
  payload: { data: error },
});
