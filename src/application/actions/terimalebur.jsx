export const GET_TERIMA_LEBUR = "[terimalebur] get terima lebur";
export const SET_DATA_TERIMA_LEBUR_SUCCESS =
  "[terimalebur] get terima lebur success";
export const SET_DATA_TERIMA_LEBUR_FAILED =
  "[terimalebur] get terima lebur failed";

export const SET_SUSUT = "[terimalebur] set susust";
export const SET_SUSUT_SUCCESS = "[terimalebur] set susut success";
export const SET_BERAT_TERIMA = "[terimalebur] set berat terima";

export const getTerimaLebur = ({ noKirim }) => ({
  type: GET_TERIMA_LEBUR,
  payload: { data: noKirim },
});
export const setDataTerimaLeburSuccess = ({ feedback }) => ({
  type: SET_DATA_TERIMA_LEBUR_SUCCESS,
  payload: { data: feedback },
});
export const setDataTerimaLeburFailed = ({ error }) => ({
  type: SET_DATA_TERIMA_LEBUR_FAILED,
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
