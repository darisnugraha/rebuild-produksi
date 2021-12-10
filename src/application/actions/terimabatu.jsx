export const GET_ALL_NO_KIRIM_BATU_BY_TANGGAL =
  "[terimabatu] get all no kirim batu by tanggal";
export const SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_SUCCESS =
  "[terimabatu] get all no kirim batu by tanggal success";
export const SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_FAILED =
  "[terimabatu] get all no kirim batu by tanggal failed";

export const GET_DETAIL_KIRIM_BATU = "[terimabatu] get detail kirim batu";
export const SET_DATA_DETAIL_KIRIM_BATU_SUCCESS =
  "[terimabatu] get detail kirim batu success";
export const SET_DATA_DETAIL_KIRIM_BATU_FAILED =
  "[terimabatu] get detail kirim batu failed";
export const SET_DATA_KIRIM_BATU_LOKAL =
  "[terimabatu] set data kirim batu lokal";

export const getAllNoKirimBatuByTanggal = ({ tanggal }) => ({
  type: GET_ALL_NO_KIRIM_BATU_BY_TANGGAL,
  payload: { data: tanggal },
});
export const setDataNoKirimBatuByTanggalSuccess = ({ feedback }) => ({
  type: SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_SUCCESS,
  payload: { data: feedback },
});
export const setDataNoKirimBatuByTanggalFailed = ({ error }) => ({
  type: SET_DATA_NO_KIRIM_BATU_BY_TANGGAL_FAILED,
  payload: { data: error },
});

export const getDetailKirimBatu = ({ noKirimBatu }) => ({
  type: GET_DETAIL_KIRIM_BATU,
  payload: { data: noKirimBatu },
});
export const setDataDetailKirimBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailKirimBatuFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_KIRIM_BATU_FAILED,
  payload: { data: error },
});
export const simpanDataDetailKirimBatuLokal = {
  type: SET_DATA_KIRIM_BATU_LOKAL,
};
