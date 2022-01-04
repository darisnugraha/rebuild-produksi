export const GET_ALL_LAPORAN_TERIMA_BATU =
  "[laporanterimabatu] get all laporan terima batu";
export const SET_DATA_LAPORAN_TERIMA_BATU_SUCCESS =
  "[laporanterimabatu] get all laporan terima batu success";
export const SET_DATA_LAPORAN_TERIMA_BATU_FAILED =
  "[laporanterimabatu] get all laporan terima batu failed";

export const getAllLaporanTerimaBatu = {
  type: GET_ALL_LAPORAN_TERIMA_BATU,
};
export const setDataLaporanTerimaBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_TERIMA_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanTerimaBatuFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_TERIMA_BATU_FAILED,
  payload: { data: error },
});
