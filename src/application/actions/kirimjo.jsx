export const GET_DETAIL_JO_POST_METHOD = "[kirimjo] get detail jo post method";
export const SET_DATA_DETAIL_JO_SUCCESS =
  "[kirimjo] get detail jo post method success";
export const SET_DATA_DETAIL_JO_FAILED =
  "[kirimjo] get detail jo post method failed";

export const COUNT_BERAT_KIRIM_JO = "[kirimjo] count berat kirim jo";
export const SET_COUNT_BERAT_KIRIM_JO = "[kirimjo] set count berat kirim jo";
export const SET_JUMLAH_KIRIM_JO = "[kirimjo] set jumlah kirim jo";
export const SAVE_JUMLAH_KIRIM_JO = "[kirimjo] save jumlah kirim jo";

export const ADD_LOCAL_KIRIM_JO = "[kirimjo] add local kirim jo";
export const ADD_LOCAL_TAMBAHAN = "[kirimjo] add local tambahan";

export const getDataDetailJO = ({ noJO }) => ({
  type: GET_DETAIL_JO_POST_METHOD,
  payload: { data: noJO },
});
export const setDataDetailJOSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailJOFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});

export const countBeratKirimJO = ({ beratKirim }) => ({
  type: COUNT_BERAT_KIRIM_JO,
  payload: beratKirim,
});
export const setCountBeratKirimJO = (beratSusut) => ({
  type: SET_COUNT_BERAT_KIRIM_JO,
  payload: { data: beratSusut },
});

export const simpanJumlahKirim = ({ jumlahKirim }) => ({
  type: SAVE_JUMLAH_KIRIM_JO,
  payload: jumlahKirim,
});

export const setJumlahKirimJO = (jumlah) => ({
  type: SET_JUMLAH_KIRIM_JO,
  payload: { data: jumlah },
});

export const addLocalKirimJO = {
  type: ADD_LOCAL_KIRIM_JO,
};

export const addLocalTambahan = {
  type: ADD_LOCAL_TAMBAHAN,
};
