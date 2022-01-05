export const GET_ALL_LAPORAN_OUTSTAND_ADMIN =
  "[laporanoutstandadmin] get all laporan outstand admin";
export const SET_DATA_LAPORAN_OUTSTAND_ADMIN_SUCCESS =
  "[laporanoutstandadmin] get all laporan outstand admin success";
export const SET_DATA_LAPORAN_OUTSTAND_ADMIN_FAILED =
  "[laporanoutstandadmin] get all laporan outstand admin failed";

export const getAllLaporanOutstandAdmin = {
  type: GET_ALL_LAPORAN_OUTSTAND_ADMIN,
};
export const setDataLaporanOutstandAdminSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_OUTSTAND_ADMIN_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanOutstandAdminFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_OUTSTAND_ADMIN_FAILED,
  payload: { data: error },
});
