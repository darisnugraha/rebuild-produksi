export const GET_ALL_MASTER_KELOMPOK_JENIS_BAHAN =
  "[masterkelompokjenisbahan] get all master kelompok jenis bahan";
export const SET_DATA_MASTER_KELOMPOK_JENIS_BAHAN_SUCCESS =
  "[masterkelompokjenisbahan] get all master kelompok jenis bahan success";
export const SET_DATA_MASTER_KELOMPOK_JENIS_BAHAN_FAILED =
  "[masterkelompokjenisbahan] get all master kelompok jenis bahan failed";

export const SET_EDIT_FORM_ON = "[masterkelompokjenisbahan] edit form on";
export const SET_EDIT_FORM_OFF = "[masterkelompokjenisbahan] edit form off";

export const GET_MASTER_KELOMPOK_JENIS_BAHAN_ID =
  "[masterkelompokjenisbahan] get master kelompok jenis bahan id";
export const SET_DATA_MASTER_KELOMPOK_JENIS_BAHAN_EDIT =
  "[masterkelompokjenisbahan] set master kelompok jenis bahan edit";

export const ADD_MASTER_KELOMPOK_JENIS_BAHAN =
  "[masterkelompokjenisbahan] add master kelompok jenis bahan";
export const DELETE_MASTER_KELOMPOK_JENIS_BAHAN =
  "[masterkelompokjenisbahan] delete master kelompok jenis bahan";
export const EDIT_MASTER_KELOMPOK_JENIS_BAHAN =
  "[masterkelompokjenisbahan] edit master kelompok jenis bahan";

export const getAllMasterKelompokJenisBahan = {
  type: GET_ALL_MASTER_KELOMPOK_JENIS_BAHAN,
};
export const setDataMasterKelompokJenisBahanSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_KELOMPOK_JENIS_BAHAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterKelompokJenisBahanFailed = ({ error }) => ({
  type: SET_DATA_MASTER_KELOMPOK_JENIS_BAHAN_FAILED,
  payload: { data: error },
});

export const setEditFormMasterKelompokJenisBahan = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterKelompokJenisBahanByID = ({ dataID }) => ({
  type: GET_MASTER_KELOMPOK_JENIS_BAHAN_ID,
  payload: dataID,
});
export const setDataMasterKelompokJenisBahanEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_KELOMPOK_JENIS_BAHAN_EDIT,
  payload: { data: dataEdit },
});

export const addMasterKelompokJenisBahan = {
  type: ADD_MASTER_KELOMPOK_JENIS_BAHAN,
};
export const deleteMasterKelompokJenisBahan = ({ id }) => ({
  type: DELETE_MASTER_KELOMPOK_JENIS_BAHAN,
  payload: { data: id },
});
export const editMasterKelompokJenisBahan = {
  type: EDIT_MASTER_KELOMPOK_JENIS_BAHAN,
};
