export const GET_ALL_MASTER_STATUS = "[masterstatus] get all master status";
export const SET_DATA_MASTER_STATUS_SUCCESS =
  "[masterstatus] get all master status success";
export const SET_DATA_MASTER_STATUS_FAILED =
  "[masterstatus] get all master status failed";

export const SET_EDIT_FORM_ON = "[masterstatus] edit form on";
export const SET_EDIT_FORM_OFF = "[masterstatus] edit form off";

export const GET_MASTER_STATUS_ID = "[masterstatus] get master status id";
export const SET_DATA_MASTER_STATUS_EDIT =
  "[masterstatus] set master status edit";

export const ADD_MASTER_STATUS = "[masterstatus] add master status";
export const DELETE_MASTER_STATUS = "[masterstatus] delete master status";
export const EDIT_MASTER_STATUS = "[masterstatus] edit master status";

export const getAllMasterStatus = {
  type: GET_ALL_MASTER_STATUS,
};
export const setDataMasterStatusSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_STATUS_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterStatusFailed = ({ error }) => ({
  type: SET_DATA_MASTER_STATUS_FAILED,
  payload: { data: error },
});

export const setEditFormMasterStatus = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterStatusByID = ({ dataID }) => ({
  type: GET_MASTER_STATUS_ID,
  payload: dataID,
});
export const setDataMasterStatusEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_STATUS_EDIT,
  payload: { data: dataEdit },
});

export const addMasterStatus = {
  type: ADD_MASTER_STATUS,
};
export const deleteMasterStatus = ({ id }) => ({
  type: DELETE_MASTER_STATUS,
  payload: { data: id },
});
export const editMasterStatus = {
  type: EDIT_MASTER_STATUS,
};
