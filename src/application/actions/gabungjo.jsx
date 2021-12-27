export const GET_ALL_JOB_ORDER = "[gabungjo] get all jo";
export const SET_DATA_JOB_ORDER_SUCCESS = "[gabungjo] get all jo success";
export const SET_DATA_JOB_ORDER_FAILED = "[gabungjo] get all jo failed";

export const getAllJobOrder = (noJO) => ({
  type: GET_ALL_JOB_ORDER,
  payload: { data: noJO },
});
export const setDataJobOrderSuccess = ({ feedback, noJO, beratGabung }) => ({
  type: SET_DATA_JOB_ORDER_SUCCESS,
  payload: { data: feedback },
  data: noJO,
  berat: beratGabung,
});
export const setDataJobOrderFailed = ({ error }) => ({
  type: SET_DATA_JOB_ORDER_FAILED,
  payload: { data: error },
});

export const GET_ALL_JOB_ORDER_DUA = "[gabungjo] get all jo dua";
export const SET_DATA_JOB_ORDER_SUCCESS_DUA =
  "[gabungjo] get all jo success dua";
export const SET_DATA_JOB_ORDER_FAILED_DUA = "[gabungjo] get all jo failed dua";

export const getAllJobOrderDua = (noJO) => ({
  type: GET_ALL_JOB_ORDER_DUA,
  payload: { data: noJO },
});
export const setDataJobOrderSuccessDua = ({ feedback, noJO, beratGabung }) => ({
  type: SET_DATA_JOB_ORDER_SUCCESS_DUA,
  payload: { data: feedback },
  data: noJO,
  berat: beratGabung,
});
export const setDataJobOrderFailedDua = ({ error }) => ({
  type: SET_DATA_JOB_ORDER_FAILED_DUA,
  payload: { data: error },
});

export const ADD_GABUNG_JO = "[gabungjo] add gabung jo";

export const addGabungJO = {
  type: ADD_GABUNG_JO,
};
