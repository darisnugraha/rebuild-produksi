export const GET_ALL_MASTER_DIVISI = "[masterdivisi] get all master divisi";
export const SET_DATA_MASTER_DIVISI_SUCCESS =
  "[masterdivisi] get all master divisi success";
export const SET_DATA_MASTER_DIVISI_FAILED =
  "[masterdivisi] get all master divisi failed";

export const SET_EDIT_FORM_ON = "[masterdivisi] edit form on";
export const SET_EDIT_FORM_OFF = "[masterdivisi] edit form off";

export const GET_MASTER_DIVISI_ID = "[masterdivisi] get master divisi id";
export const SET_DATA_MASTER_DIVISI_EDIT =
  "[masterdivisi] set master divisi edit";

export const ADD_MASTER_DIVISI = "[masterdivisi] add master divisi";
export const DELETE_MASTER_DIVISI = "[masterdivisi] delete master divisi";
export const EDIT_MASTER_DIVISI = "[masterdivisi] edit master divisi";

export const getAllMasterDivisi = {
  type: GET_ALL_MASTER_DIVISI,
};

export const getMasterDivisi = () => ({
  type: GET_ALL_MASTER_DIVISI,
});
export const setDataMasterDivisiSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_DIVISI_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterDivisiFailed = ({ error }) => ({
  type: SET_DATA_MASTER_DIVISI_FAILED,
  payload: { data: error },
});

export const setEditFormMasterDivisi = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterDivisiByID = ({ dataID }) => ({
  type: GET_MASTER_DIVISI_ID,
  payload: dataID,
});
export const setDataMasterDivisiEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_DIVISI_EDIT,
  payload: { data: dataEdit },
});

export const addMasterDivisi = {
  type: ADD_MASTER_DIVISI,
};
export const deleteMasterDivisi = ({ id }) => ({
  type: DELETE_MASTER_DIVISI,
  payload: { data: id },
});
export const editMasterDivisi = {
  type: EDIT_MASTER_DIVISI,
};
