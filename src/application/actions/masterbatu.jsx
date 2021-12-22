export const GET_ALL_MASTER_BATU = "[masterbatu] get all master batu";
export const SET_DATA_MASTER_BATU_SUCCESS =
  "[masterbatu] get all master batu success";
export const SET_DATA_MASTER_BATU_FAILED =
  "[masterbatu] get all master batu failed";

export const SET_EDIT_FORM_ON = "[masterbatu] edit form on";
export const SET_EDIT_FORM_OFF = "[masterbatu] edit form off";

export const GET_MASTER_BATU_ID = "[masterbatu] get master batu id";
export const SET_DATA_MASTER_BATU_EDIT = "[masterbatu] set master batu edit";

export const ADD_MASTER_BATU = "[masterbatu] add master batu";
export const DELETE_MASTER_BATU = "[masterbatu] delete master batu";
export const EDIT_MASTER_BATU = "[masterbatu] edit master batu";

export const getAllMasterBatu = {
  type: GET_ALL_MASTER_BATU,
};
export const setDataMasterBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterBatuFailed = ({ error }) => ({
  type: SET_DATA_MASTER_BATU_FAILED,
  payload: { data: error },
});

export const setEditFormMasterBatu = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterBatuByID = ({ dataID }) => ({
  type: GET_MASTER_BATU_ID,
  payload: dataID,
});
export const setDataMasterBatuEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_BATU_EDIT,
  payload: { data: dataEdit },
});

export const addMasterBatu = {
  type: ADD_MASTER_BATU,
};
export const deleteMasterBatu = ({ id }) => ({
  type: DELETE_MASTER_BATU,
  payload: { data: id },
});
export const editMasterBatu = {
  type: EDIT_MASTER_BATU,
};
