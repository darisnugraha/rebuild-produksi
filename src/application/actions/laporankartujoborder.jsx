export const GET_ALL_KARTU_JOB_ORDER = "[kartujo] get all kartu jo";
export const SET_DATA_KARTU_JOB_ORDER_SUCCESS =
  "[kartujo] get all kartu jo success";
export const SET_DATA_KARTU_JOB_ORDER_FAILED =
  "[kartujo] get all kartu jo failed";

export const getAllKartuJo = {
  type: GET_ALL_KARTU_JOB_ORDER,
};
export const setDataKartuJoSuccess = ({ feedback }) => ({
  type: SET_DATA_KARTU_JOB_ORDER_SUCCESS,
  payload: { data: feedback },
});
export const setDataKartuJoFailed = ({ error }) => ({
  type: SET_DATA_KARTU_JOB_ORDER_FAILED,
  payload: { data: error },
});
