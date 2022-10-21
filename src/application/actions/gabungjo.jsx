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

export const GET_NO_INDUK_JOB_ORDER = "[gabungjo] get no induk job order";
export const SET_NO_INDUK_JOB_ORDER = "[gabungjo] set no induk job order";

export const getNoIndukJobOrder = {
  type: GET_NO_INDUK_JOB_ORDER,
};

export const setNoIndukJobOrder = (feedback) => ({
  type: SET_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const GET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[gabungjo] get data by no induk job order";
export const SET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[gabungjo] set data by no induk job order";

export const getDataByNoInduk = (noInduk) => ({
  type: GET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: noInduk },
});

export const setDataByNoInduk = (feedback) => ({
  type: SET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const ADD_GABUNG_JO_LOCAL = "[gabungjo] add gabung jo local";

export const addGabungJOLocal = {
  type: ADD_GABUNG_JO_LOCAL,
};

export const ADD_GABUNG_JO = "[gabungjo] add gabung jo";

export const addGabungJO = {
  type: ADD_GABUNG_JO,
};

export const DELETE_JOB_ORDER = "[gabungjo] delete job order local";

export const deleteJobOrder = (noJO) => ({
  type: DELETE_JOB_ORDER,
  payload: { data: noJO },
});
