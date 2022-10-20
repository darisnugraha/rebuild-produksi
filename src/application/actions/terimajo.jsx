export const GET_ALL_DETAIL_JO = "[terimajo] get all detail jo";
export const SET_DATA_DETAIL_JO_SUCCESS =
  "[terimajo] get all detail jo success";
export const SET_DATA_DETAIL_JO_FAILED = "[terimajo] get all detail jo failed";

export const GET_NO_INDUK_JOB_ORDER = "[terimajo] get no induk job order";
export const SET_NO_INDUK_JOB_ORDER = "[terimajo] set no induk job order";

export const ADD_TERIMA_JO = "[terimajo] add terima jo";
export const ADD_TERIMA_JO_LOCAL = "[terimajo] add terima jo local";

export const GET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[terimajo] get data by no induk job order";
export const SET_DATA_BY_NO_INDUK_JOB_ORDER =
  "[terimajo] set data by no induk job order";

export const DELETE_DATA_LOCAL_TERIMA_JO = "[terimajo] delete data local";

export const getAllDetailJO = ({ noJobOrder, type }) => ({
  type: GET_ALL_DETAIL_JO,
  payload: { data: noJobOrder, dataType: type },
});
export const setDataDetailJOSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailJOFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});

export const addTerimaJO = {
  type: ADD_TERIMA_JO,
};

export const addTerimaJOLocal = {
  type: ADD_TERIMA_JO_LOCAL,
};

export const getNoIndukJobOrder = {
  type: GET_NO_INDUK_JOB_ORDER,
};
export const setNoIndukJobOrder = (feedback) => ({
  type: SET_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const getDataByNoInduk = (noInduk) => ({
  type: GET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: noInduk },
});

export const setDataByNoInduk = (feedback) => ({
  type: SET_DATA_BY_NO_INDUK_JOB_ORDER,
  payload: { data: feedback },
});

export const deleteDataLocal = (id) => ({
  type: DELETE_DATA_LOCAL_TERIMA_JO,
  payload: { data: id },
});
