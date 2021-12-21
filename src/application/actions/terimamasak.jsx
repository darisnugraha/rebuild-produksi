export const GET_TERIMA_MASAK = "[terimamasak] get terima masak";
export const SET_DATA_TERIMA_MASAK_SUCCESS =
  "[terimamasak] get terima masak success";
export const SET_DATA_TERIMA_MASAK_FAILED =
  "[terimamasak] get terima masak failed";

export const SET_SUSUT = "[terimamasak] set susut";
export const SET_SUSUT_SUCCESS = "[terimamasak] set susut success";
export const SET_BERAT_TERIMA = "[terimamasak] set berat terima";

export const getTerimaMasak = ({ noKirim }) => ({
  type: GET_TERIMA_MASAK,
  payload: { data: noKirim },
});
export const setDataTerimaMasakSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_MASAK_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaMasakFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_MASAK_FAILED,
  payload: { data: error },
});

export const countSusut = ({ beratTerima }) => ({
  type: SET_SUSUT,
  payload: { data: beratTerima },
});
export const setDataSusutSuccess = ({ feedback }) => ({
  type: SET_SUSUT_SUCCESS,
  payload: { data: feedback },
});
export const setDataBeratTerima = ({ beratTerima }) => ({
  type: SET_BERAT_TERIMA,
  payload: { data: beratTerima },
});
