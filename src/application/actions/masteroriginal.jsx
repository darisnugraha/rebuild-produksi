export const GET_ALL_MASTER_ORIGINAL =
  "[masteroriginal] get all master original";
export const SET_DATA_MASTER_ORIGINAL_SUCCESS =
  "[masteroriginal] get all master original success";
export const SET_DATA_MASTER_ORIGINAL_FAILED =
  "[masteroriginal] get all master original failed";

export const GET_ALL_MASTER_ORIGINAL_BY_ID =
  "[masteroriginal] get all master original by id";
export const SET_DATA_MASTER_ORIGINAL_BY_ID_SUCCESS =
  "[masteroriginal] get all master original by id success";
export const SET_DATA_MASTER_ORIGINAL_BY_ID_FAILED =
  "[masteroriginal] get all master original by id failed";

export const SET_EDIT_FORM_ON = "[masteroriginal] edit form on";
export const SET_EDIT_FORM_OFF = "[masteroriginal] edit form off";

export const ADD_MASTER_ORIGINAL = "[masteroriginal] add form master original";
export const EDIT_MASTER_ORIGINAL =
  "[masteroriginal] edit form master original";

export const getAllMasterOriginal = {
  type: GET_ALL_MASTER_ORIGINAL,
};
export const setDataMasterOriginalSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_ORIGINAL_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterOriginalFailed = ({ error }) => ({
  type: SET_DATA_MASTER_ORIGINAL_FAILED,
  payload: { data: error },
});

export const getMasterOriginalById = ({ id }) => ({
  type: GET_ALL_MASTER_ORIGINAL_BY_ID,
  payload: { data: id },
});
export const setDataMasterOriginalByIdSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_ORIGINAL_BY_ID_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterOriginalByIdFailed = ({ error }) => ({
  type: SET_DATA_MASTER_ORIGINAL_BY_ID_FAILED,
  payload: { data: error },
});

export const setEditFormMasterOriginal = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const addMasterOriginal = {
  type: ADD_MASTER_ORIGINAL,
};

export const editMasterOriginal = {
  type: EDIT_MASTER_ORIGINAL,
};
