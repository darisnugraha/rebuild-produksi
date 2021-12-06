export const GET_ALL_MASTER_BATU = "[masterbatu] get all master batu";
export const SET_DATA_MASTER_BATU_SUCCESS =
  "[masterbatu] get all master batu success";
export const SET_DATA_MASTER_BATU_FAILED =
  "[masterbatu] get all master batu failed";

export const SET_EDIT_FORM_ON = "[masterbatu] edit form on";
export const SET_EDIT_FORM_OFF = "[masterbatu] edit form off";

export const GET_MASTER_BATU_ID = "[masterbatu] get master batu id";
export const SET_DATA_MASTER_BATU_EDIT = "[masterbatu] set master batu edit";

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
