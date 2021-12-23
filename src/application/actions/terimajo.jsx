export const GET_ALL_DETAIL_JO = "[terimajo] get all detail jo";
export const SET_DATA_DETAIL_JO_SUCCESS =
  "[terimajo] get all detail jo success";
export const SET_DATA_DETAIL_JO_FAILED = "[terimajo] get all detail jo failed";

export const ADD_TERIMA_JO = "[terimajo] add terima jo";

export const getAllDetailJO = ({ noJobOrder }) => ({
  type: GET_ALL_DETAIL_JO,
  payload: { data: noJobOrder },
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
