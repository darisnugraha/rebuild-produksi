export const GET_ALL_HISTORY_KIRIM_MASAK =
  "[kirimmasak] get all history kirim masak";
export const SET_DATA_HISTORY_KIRIM_MASAK_SUCCESS =
  "[kirimmasak] get all history kirim masak success";
export const SET_DATA_HISTORY_KIRIM_MASAK_FAILED =
  "[kirimmasak] get all history kirim masak failed";
export const GET_TERIMA_LEBUR_MASAK = "[kirimmasak] get terima lebur masak";
export const SET_DATA_TERIMA_LEBUR_MASAK_SUCCESS =
  "[kirimmasak] get terima lebur masak success";
export const SET_DATA_TERIMA_LEBUR_MASAK_FAILED =
  "[kirimmasak] get terima lebur masak failed";
export const SET_24K = "[kirimmasak] set 24k";
export const SET_24K_SUCCESS = "[kirimmasak] set 24k success";
export const SET_BERAT_TERIMA = "[kirimmasak] set berat terima";
export const SET_LOCAL_DATA_KIRIM_MASAK =
  "[kirimmasak] set data local kirim masak";
export const ADD_KIRIM_MASAK = "[kirimmasak] add kirim masak";

export const getAllHistoryKirimMasak = {
  type: GET_ALL_HISTORY_KIRIM_MASAK,
};
export const setDataHistoryKirimMasakSuccess = ({ feedback }) => ({
  type: SET_DATA_HISTORY_KIRIM_MASAK_SUCCESS,
  payload: { data: feedback },
});
export const setDataHistoryKirimMasakFailed = ({ error }) => ({
  type: SET_DATA_HISTORY_KIRIM_MASAK_FAILED,
  payload: { data: error },
});
export const getTerimaLeburMasak = ({ noTerima }) => ({
  type: GET_TERIMA_LEBUR_MASAK,
  payload: { data: noTerima },
});
export const setDataTerimaLeburMasakSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_LEBUR_MASAK_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaLeburMasakFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_LEBUR_MASAK_FAILED,
  payload: { data: error },
});
export const count24K = ({ beratTerima }) => ({
  type: SET_24K,
  payload: { data: beratTerima },
});
export const count24KSuccess = ({ feedback }) => ({
  type: SET_24K_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaBerat = ({ beratTerima }) => ({
  type: SET_BERAT_TERIMA,
  payload: { data: beratTerima },
});
export const simpanLokalKirimMasak = {
  type: SET_LOCAL_DATA_KIRIM_MASAK,
};

export const addKirimMasak = {
  type: ADD_KIRIM_MASAK,
};
