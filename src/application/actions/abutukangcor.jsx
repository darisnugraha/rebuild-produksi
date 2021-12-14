export const GET_ALL_SETOR_OUTSTAND_CASTING =
  "[abutukangcor] get all setor outstand casting";
export const SET_DATA_SETOR_OUTSTAND_CASTING_SUCCESS =
  "[abutukangcor] get all setor outstand casting success";
export const SET_DATA_SETOR_OUTSTAND_CASTING_FAILED =
  "[abutukangcor] get all setor outstand casting failed";

export const getAllSetorOutstandCasting = {
  type: GET_ALL_SETOR_OUTSTAND_CASTING,
};
export const setDataSetorOutstandCastingSuccess = ({ feedback }) => ({
  type: SET_DATA_SETOR_OUTSTAND_CASTING_SUCCESS,
  payload: { data: feedback },
});
export const setDataSetorOutstandCastingFailed = ({ error }) => ({
  type: SET_DATA_SETOR_OUTSTAND_CASTING_FAILED,
  payload: { data: error },
});
