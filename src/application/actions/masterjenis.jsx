export const GET_ALL_MASTER_JENIS = "[masterjenis] get all master jenis";
export const SET_DATA_MASTER_JENIS_SUCCESS =
  "[masterjenis] get all master jenis success";
export const SET_DATA_MASTER_JENIS_FAILED =
  "[masterjenis] get all master jenis failed";

export const SET_EDIT_FORM_ON = "[masterjenis] edit form on";
export const SET_EDIT_FORM_OFF = "[masterjenis] edit form off";

export const GET_MASTER_JENIS_ID = "[masterjenis] get master jenis id";
export const SET_DATA_MASTER_JENIS_EDIT = "[masterjenis] set master jenis edit";

export const getAllMasterJenis = {
  type: GET_ALL_MASTER_JENIS,
};
export const setDataMasterJenisSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_JENIS_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterJenisFailed = ({ error }) => ({
  type: SET_DATA_MASTER_JENIS_FAILED,
  payload: { data: error },
});

export const setEditFormMasterJenis = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterJenisByID = ({ dataID }) => ({
  type: GET_MASTER_JENIS_ID,
  payload: dataID,
});
export const setDataMasterJenisEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_JENIS_EDIT,
  payload: { data: dataEdit },
});
