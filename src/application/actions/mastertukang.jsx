export const GET_ALL_MASTER_TUKANG = "[mastertukang] get all master tukang";
export const SET_DATA_MASTER_TUKANG_SUCCESS = "[mastertukang] get all master tukang success";
export const SET_DATA_MASTER_TUKANG_FAILED = "[mastertukang] get all master tukang failed";

export const SET_EDIT_FORM_ON = "[mastertukang] edit form on";
export const SET_EDIT_FORM_OFF = "[mastertukang] edit form off";

export const GET_MASTER_TUKANG_ID =
  "[mastertukang] get master tukang id";
export const SET_DATA_MASTER_TUKANG_EDIT =
  "[mastertukang] set master tukang edit";

export const getAllMasterTukang ={
	type : GET_ALL_MASTER_TUKANG,
}
export const setDataMasterTukangSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_TUKANG_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterTukangFailed =({error}) => ({
	type : SET_DATA_MASTER_TUKANG_FAILED,
	payload : { data : error }
})

export const setEditFormMasterTukang = (isEdit) => ({
	type: isEdit ? SET_EDIT_FORM_ON : SET_EDIT_FORM_OFF,
	payload: isEdit,
  });
  
  export const getMasterTukangByID = ({ dataID }) => ({
	type: GET_MASTER_TUKANG_ID,
	payload: dataID,
  });
  export const setDataMasterTukangEdit = ({ dataEdit }) => ({
	type: SET_DATA_MASTER_TUKANG_EDIT,
	payload: { data: dataEdit },
  });
  