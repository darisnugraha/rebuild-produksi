export const GET_ALL_MASTER_USER = "[masteruser] get all master user";
export const SET_DATA_MASTER_USER_SUCCESS =
  "[masteruser] get all master user success";
export const SET_DATA_MASTER_USER_FAILED =
  "[masteruser] get all master user failed";

export const SET_EDIT_FORM_ON = "[masteruser] edit form on";
export const SET_EDIT_FORM_OFF = "[masteruser] edit form off";

export const GET_MASTER_USER_ID = "[masteruser] get master user id";
export const SET_DATA_MASTER_USER_EDIT = "[masteruser] set master user edit";

export const ADD_MASTER_USER = "[masteruser] add master user";
export const DELETE_MASTER_USER = "[masteruser] delete master user";
export const EDIT_MASTER_USER = "[masteruser] edit master user";

export const SET_USER = "[masteruser] set user";

export const getAllMasterUser = {
  type: GET_ALL_MASTER_USER,
};
export const setDataMasterUserSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_USER_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterUserFailed = ({ error }) => ({
  type: SET_DATA_MASTER_USER_FAILED,
  payload: { data: error },
});

export const setEditFormMasterUser = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterUserByID = ({ dataID }) => ({
  type: GET_MASTER_USER_ID,
  payload: dataID,
});
export const setDataMasterUserEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_USER_EDIT,
  payload: { data: dataEdit },
});

export const addMasterUser = {
  type: ADD_MASTER_USER,
};
export const deleteMasterUser = ({ id }) => ({
  type: DELETE_MASTER_USER,
  payload: { data: id },
});
export const setMasterUser = ({ id }) => ({
  type: SET_USER,
  payload: { data: id },
});

export const editMasterUser = {
  type: EDIT_MASTER_USER,
};
