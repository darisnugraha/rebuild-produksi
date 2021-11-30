export const GET_ALL_MASTER_TUKANG = "[mastertukang] get all master tukang";
export const SET_DATA_MASTER_TUKANG_SUCCESS = "[mastertukang] get all master tukang success";
export const SET_DATA_MASTER_TUKANG_FAILED = "[mastertukang] get all master tukang failed";

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