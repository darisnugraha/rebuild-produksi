export const GET_ALL_LAPORAN_PEMBUATAN_JENIS_BAHAN =
  "[laporanpembuatanjenisbahan] get all laporan pembuatan jenis bahan";
export const SET_DATA_LAPORAN_PEMBUATAN_JENIS_BAHAN_SUCCESS =
  "[laporanpembuatanjenisbahan] get all laporan pembuatan jenis bahan success";
export const SET_DATA_LAPORAN_PEMBUATAN_JENIS_BAHAN_FAILED =
  "[laporanpembuatanjenisbahan] get all laporan pembuatan jenis bahan failed";

export const getAllLaporanPembuatanJenisBahan = {
  type: GET_ALL_LAPORAN_PEMBUATAN_JENIS_BAHAN,
};
export const setDataLaporanPembuatanJenisBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_LAPORAN_PEMBUATAN_JENIS_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataLaporanPembuatanJenisBahanFailed = ({ error }) => ({
  type: SET_DATA_LAPORAN_PEMBUATAN_JENIS_BAHAN_FAILED,
  payload: { data: error },
});
