export const GET_ALL_SETOR_OUTSTAND_POTONG =
  "[abutukangpotong] get all setor outstand potong";
export const SET_DATA_SETOR_OUTSTAND_POTONG_SUCCESS =
  "[abutukangpotong] get all setor outstand potong success";
export const SET_DATA_SETOR_OUTSTAND_POTONG_FAILED =
  "[abutukangpotong] get all setor outstand potong failed";

export const getAllSetorOutstandPotong = {
  type: GET_ALL_SETOR_OUTSTAND_POTONG,
};
export const setDataSetorOutstandPotongSuccess = ({ feedback }) => ({
  type: SET_DATA_SETOR_OUTSTAND_POTONG_SUCCESS,
  payload: { data: feedback },
});
export const setDataSetorOutstandPotongFailed = ({ error }) => ({
  type: SET_DATA_SETOR_OUTSTAND_POTONG_FAILED,
  payload: { data: error },
});
