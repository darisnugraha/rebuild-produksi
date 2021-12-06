export const GET_ALL_MASTER_JENIS_BATU =
  "[masterjenisbatu] get all master jenis batu";
export const SET_DATA_MASTER_JENIS_BATU_SUCCESS =
  "[masterjenisbatu] get all master jenis batu success";
export const SET_DATA_MASTER_JENIS_BATU_FAILED =
  "[masterjenisbatu] get all master jenis batu failed";

export const SET_EDIT_FORM_ON = "[masterjenisbatu] edit form on";
export const SET_EDIT_FORM_OFF = "[masterjenisbatu] edit form off";

export const GET_MASTER_JENIS_BATU_ID =
  "[masterjenisbatu] get master jenis batu id";
export const SET_DATA_MASTER_JENIS_BATU_EDIT =
  "[masterjenisbatu] set master jenis batu edit";

export const getAllMasterJenisBatu = {
  type: GET_ALL_MASTER_JENIS_BATU,
};
export const setDataMasterJenisBatuSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_JENIS_BATU_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterJenisBatuFailed = ({ error }) => ({
  type: SET_DATA_MASTER_JENIS_BATU_FAILED,
  payload: { data: error },
});

export const setEditFormMasterJenisBatu = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterJenisBatuByID = ({ dataID }) => ({
  type: GET_MASTER_JENIS_BATU_ID,
  payload: dataID,
});
export const setDataMasterJenisBatuEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_JENIS_BATU_EDIT,
  payload: { data: dataEdit },
});
