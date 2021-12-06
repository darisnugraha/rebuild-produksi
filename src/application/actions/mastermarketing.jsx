export const GET_ALL_MASTER_MARKETING =
  "[mastermarketing] get all master marketing";
export const SET_DATA_MASTER_MARKETING_SUCCESS =
  "[mastermarketing] get all master marketing success";
export const SET_DATA_MASTER_MARKETING_FAILED =
  "[mastermarketing] get all master marketing failed";

export const SET_EDIT_FORM_ON = "[mastermarketing] edit form on";
export const SET_EDIT_FORM_OFF = "[mastermarketing] edit form off";

export const GET_MASTER_MARKETING_ID =
  "[mastermarketing] get master marketing id";
export const SET_DATA_MASTER_MARKETING_EDIT =
  "[mastermarketing] set master marketing edit";

export const getAllMasterMarketing = {
  type: GET_ALL_MASTER_MARKETING,
};
export const setDataMasterMarketingSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_MARKETING_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterMarketingFailed = ({ error }) => ({
  type: SET_DATA_MASTER_MARKETING_FAILED,
  payload: { data: error },
});

export const setEditFormMasterMarketing = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterMarketingByID = ({ dataID }) => ({
  type: GET_MASTER_MARKETING_ID,
  payload: dataID,
});
export const setDataMasterMarketingEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_MARKETING_EDIT,
  payload: { data: dataEdit },
});
