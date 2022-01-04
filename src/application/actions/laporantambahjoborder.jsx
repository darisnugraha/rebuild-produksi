export const GET_ALL_LAPORAN_TAMBAH_JOB_ORDER =
  "[laporantambahjoborder] get all laporan tambah job order";
export const SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_SUCCESS =
  "[laporantambahjoborder] get all laporan tambah job order success";
export const SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_FAILED =
  "[laporantambahjoborder] get all laporan tambah job order failed";

export const getAllLaporanTambahJobOrder = {
  type: GET_ALL_LAPORAN_TAMBAH_JOB_ORDER,
};
export const setDataLaporanTambahJobOrderSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTambahJobOrderFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_TAMBAH_JOB_ORDER_FAILED,
  payload: { data: error },
});
