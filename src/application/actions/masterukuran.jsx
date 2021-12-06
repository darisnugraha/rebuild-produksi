export const GET_ALL_MASTER_UKURAN = "[masterukuran] get all master ukuran";
export const SET_DATA_MASTER_UKURAN_SUCCESS =
  "[masterukuran] get all master ukuran success";
export const SET_DATA_MASTER_UKURAN_FAILED =
  "[masterukuran] get all master ukuran failed";

export const SET_EDIT_FORM_ON = "[masterukuran] edit form on";
export const SET_EDIT_FORM_OFF = "[masterukuran] edit form off";

export const GET_MASTER_UKURAN_ID = "[masterukuran] get master ukuran id";
export const SET_DATA_MASTER_UKURAN_EDIT =
  "[masterukuran] set master ukuran edit";

export const getAllMasterUkuran = {
  type: GET_ALL_MASTER_UKURAN,
};
export const setDataMasterUkuranSuccess = ({ feedback }) => ({
  type: SET_DATA_MASTER_UKURAN_SUCCESS,
  payload: { data: feedback },
});
export const setDataMasterUkuranFailed = ({ error }) => ({
  type: SET_DATA_MASTER_UKURAN_FAILED,
  payload: { data: error },
});

export const setEditFormMasterUkuran = (isEdit) => ({
  type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
  payload: isEdit,
});

export const getMasterUkuranByID = ({ dataID }) => ({
  type: GET_MASTER_UKURAN_ID,
  payload: dataID,
});
export const setDataMasterUkuranEdit = ({ dataEdit }) => ({
  type: SET_DATA_MASTER_UKURAN_EDIT,
  payload: { data: dataEdit },
});
