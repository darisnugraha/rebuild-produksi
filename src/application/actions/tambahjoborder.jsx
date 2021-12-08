export const ADD_DATA_STAFF = "[tambahjoborder] add data staff";
export const SET_DATA_STAFF_SUCCESS = "[tambahjoborder] add data staff success";
export const SET_DATA_STAFF_FAILED = "[tambahjoborder] add data staff failed";
export const ADD_DATA_DETAIL_JO = "[tambahjoborder] add data detail jo";
export const SET_DATA_DETAIL_JO_SUCCESS = "[tambahjoborder] add data detail jo success";
export const SET_DATA_DETAIL_JO_FAILED = "[tambahjoborder] add data detail jo failed";

export const addDataStaff = {
  type: ADD_DATA_STAFF,
};
export const setDataStaffSuccess = ({ feedback }) => ({
  type: SET_DATA_STAFF_SUCCESS,
  payload: { data: feedback },
});
export const setDataStaffFailed = ({ error }) => ({
  type: SET_DATA_STAFF_FAILED,
  payload: { data: error },
});

export const addDataDetailJO = {
  type: ADD_DATA_DETAIL_JO,
};
export const setDataDetailJOSuccess = ({ feedback }) => ({
  type: SET_DATA_DETAIL_JO_SUCCESS,
  payload: { data: feedback },
});
export const setDataDetailJOFailed = ({ error }) => ({
  type: SET_DATA_DETAIL_JO_FAILED,
  payload: { data: error },
});
