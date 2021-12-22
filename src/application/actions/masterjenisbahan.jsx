export const GET_ALL_MASTER_JENIS_BAHAN =
  "[masterjenisbahan] get all master jenis bahan";
export const SET_DATA_MASTER_JENIS_BAHAN_SUCCESS =
  "[masterjenisbahan] get all master jenis bahan success";
export const SET_DATA_MASTER_JENIS_BAHAN_FAILED =
  "[masterjenisbahan] get all master jenis bahan failed";

export const SET_EDIT_FORM_ON = "[masterjenisbahan] edit form on";
export const SET_EDIT_FORM_OFF = "[masterjenisbahan] edit form off";

export const GET_MASTER_JENIS_BAHAN_ID =
  "[masterjenisbahan] get master jenis bahan id";
export const SET_DATA_MASTER_JENIS_BAHAN_EDIT =
  "[masterjenisbahan] set master jenis bahan edit";

export const ADD_MASTER_JENIS_BAHAN =
  "[masterjenisbahan] add master jenis bahan";
export const DELETE_MASTER_JENIS_BAHAN =
  "[masterjenisbahan] delete master jenis bahan";
export const EDIT_MASTER_JENIS_BAHAN =
  "[masterjenisbahan] edit master jenis bahan";

export const getAllMasterJenisBahan = {
  type: GET_ALL_MASTER_JENIS_BAHAN,
};
export const setDataMasterJenisBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_JENIS_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterJenisBahanFailed = ({ error }) => ({
  type: SET_DATA_MASTER_JENIS_BAHAN_FAILED,
  payload: { data: error },
});

export const setEditFormMasterJenisBahan = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterJenisBahanByID = ({ dataID }) => ({
  type: GET_MASTER_JENIS_BAHAN_ID,
  payload: dataID,
});
export const setDataMasterJenisBahanEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_JENIS_BAHAN_EDIT,
  payload: { data: dataEdit },
});

export const addMasterJenisBahan = {
  type: ADD_MASTER_JENIS_BAHAN,
};
export const deleteMasterJenisBahan = ({ id }) => ({
  type: DELETE_MASTER_JENIS_BAHAN,
  payload: { data: id },
});
export const editMasterJenisBahan = {
  type: EDIT_MASTER_JENIS_BAHAN,
};
