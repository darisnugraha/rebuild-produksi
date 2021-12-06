export const GET_ALL_MASTER_KONDISI = "[masterkondisi] get all master kondisi";
export const SET_DATA_MASTER_KONDISI_SUCCESS =
  "[masterkondisi] get all master kondisi success";
export const SET_DATA_MASTER_KONDISI_FAILED =
  "[masterkondisi] get all master kondisi failed";

export const SET_EDIT_FORM_ON = "[masterkondisi] edit form on";
export const SET_EDIT_FORM_OFF = "[masterkondisi] edit form off";

export const GET_MASTER_KONDISI_ID = "[masterkondisi] get master kondisi id";
export const SET_DATA_MASTER_KONDISI_EDIT =
  "[masterkondisi] set master kondisi edit";

export const getAllMasterKondisi = {
  type: GET_ALL_MASTER_KONDISI,
};
export const setDataMasterKondisiSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_KONDISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterKondisiFailed = ({ error }) => ({
  type: SET_DATA_MASTER_KONDISI_FAILED,
  payload: { data: error },
});

export const setEditFormMasterKondisi = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterKondisiByID = ({ dataID }) => ({
  type: GET_MASTER_KONDISI_ID,
  payload: dataID,
});
export const setDataMasterKondisiEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_KONDISI_EDIT,
  payload: { data: dataEdit },
});
