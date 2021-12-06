export const GET_ALL_MASTER_BAHAN = "[masterbahan] get all master bahan";
export const SET_DATA_MASTER_BAHAN_SUCCESS =
  "[masterbahan] get all master bahan success";
export const SET_DATA_MASTER_BAHAN_FAILED =
  "[masterbahan] get all master bahan failed";

export const SET_EDIT_FORM_ON = "[masterbahan] edit form on";
export const SET_EDIT_FORM_OFF = "[masterbahan] edit form off";

export const GET_MASTER_BAHAN_ID = "[masterbahan] get master bahan id";
export const SET_DATA_MASTER_BAHAN_EDIT = "[masterbahan] set master bahan edit";

export const getAllMasterBahan = {
  type: GET_ALL_MASTER_BAHAN,
};
export const setDataMasterBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterBahanFailed = ({ error }) => ({
  type: SET_DATA_MASTER_BAHAN_FAILED,
  payload: { data: error },
});

export const setEditFormMasterBahan = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterBahanByID = ({ dataID }) => ({
  type: GET_MASTER_BAHAN_ID,
  payload: dataID,
});
export const setDataMasterBahanEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_BAHAN_EDIT,
  payload: { data: dataEdit },
});
