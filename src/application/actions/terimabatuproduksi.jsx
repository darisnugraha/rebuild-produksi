export const GET_ALL_KIRIM_BATU = "[terimabatuproduksi] get all kirim batu";
export const SET_DATA_KIRIM_BATU_SUCCESS =
  "[terimabatuproduksi] get all kirim batu success";
export const SET_DATA_KIRIM_BATU_FAILED =
  "[terimabatuproduksi] get all kirim batu failed";
export const ADD_TERIMA_BATU_PRODUKSI = "[terimabatuproduksi] add terima batu";

export const getAllKirimBatu = {
  type: GET_ALL_KIRIM_BATU,
};
export const setDataKirimBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimBatuFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BATU_FAILED,
  payload: { data: error },
});

export const addTerimaBatuProduksi = {
  type: ADD_TERIMA_BATU_PRODUKSI,
};

export const GET_KIRIM_BATU_LOCAL = "[terimabatuproduksi] get kirim batu local";
export const SET_DATA_KIRIM_BATU_LOCAL_SUCCESS =
  "[terimabatuproduksi] get  kirim batu local success";
export const SET_DATA_KIRIM_BATU_LOCAL_FAILED =
  "[terimabatuproduksi] get  kirim batu local failed";

export const getKirimBatuByLocal = (onsend) => ({
  type: GET_KIRIM_BATU_LOCAL,
  payload: { data: onsend },
});
export const setDataKirimBatuLocalSuccess = ({ feedback }) => ({
  type: SET_DATA_KIRIM_BATU_LOCAL_SUCCESS,
  payload: { data: feedback },
});
export const setDataKirimBatuLocalFailed = ({ error }) => ({
  type: SET_DATA_KIRIM_BATU_LOCAL_FAILED,
  payload: { data: error },
});
