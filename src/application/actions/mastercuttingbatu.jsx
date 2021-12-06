export const GET_ALL_MASTER_CUTTING_BATU =
  "[mastercuttingbatu] get all master cutting batu";
export const SET_DATA_MASTER_CUTTING_BATU_SUCCESS =
  "[mastercuttingbatu] get all master cutting batu success";
export const SET_DATA_MASTER_CUTTING_BATU_FAILED =
  "[mastercuttingbatu] get all master cutting batu failed";

export const SET_EDIT_FORM_ON = "[mastercuttingbatu] edit form on";
export const SET_EDIT_FORM_OFF = "[mastercuttingbatu] edit form off";

export const GET_MASTER_CUTTING_BATU_ID =
  "[mastercuttingbatu] get master cutting batu id";
export const SET_DATA_MASTER_CUTTING_BATU_EDIT =
  "[mastercuttingbatu] set master cutting batu edit";

export const getAllMasterCuttingBatu = {
  type: GET_ALL_MASTER_CUTTING_BATU,
};
export const setDataMasterCuttingBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_CUTTING_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterCuttingBatuFailed = ({ error }) => ({
  type: SET_DATA_MASTER_CUTTING_BATU_FAILED,
  payload: { data: error },
});

export const setEditFormMasterCuttingBatu = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterCuttingBatuByID = ({ dataID }) => ({
  type: GET_MASTER_CUTTING_BATU_ID,
  payload: dataID,
});
export const setDataMasterCuttingBatuEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_CUTTING_BATU_EDIT,
  payload: { data: dataEdit },
});
