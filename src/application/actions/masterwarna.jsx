export const GET_ALL_MASTER_WARNA = "[masterwarna] get all master warna";
export const SET_DATA_MASTER_WARNA_SUCCESS =
  "[masterwarna] get all master warna success";
export const SET_DATA_MASTER_WARNA_FAILED =
  "[masterwarna] get all master warna failed";

export const SET_EDIT_FORM_ON = "[masterwarna] edit form on";
export const SET_EDIT_FORM_OFF = "[masterwarna] edit form off";

export const GET_MASTER_WARNA_ID = "[masterwarna] get master warna id";
export const SET_DATA_MASTER_WARNA_EDIT = "[masterwarna] set master warna edit";

export const getAllMasterWarna = {
  type: GET_ALL_MASTER_WARNA,
};
export const setDataMasterWarnaSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_WARNA_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterWarnaFailed = ({ error }) => ({
  type: SET_DATA_MASTER_WARNA_FAILED,
  payload: { data: error },
});

export const setEditFormMasterWarna = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterWarnaByID = ({ dataID }) => ({
  type: GET_MASTER_WARNA_ID,
  payload: dataID,
});
export const setDataMasterWarnaEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_WARNA_EDIT,
  payload: { data: dataEdit },
});
