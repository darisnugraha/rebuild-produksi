export const GET_ALL_MASTER_ORIGINAL = "[masteroriginal] get all master original";
export const SET_DATA_MASTER_ORIGINAL_SUCCESS = "[masteroriginal] get all master original success";
export const SET_DATA_MASTER_ORIGINAL_FAILED = "[masteroriginal] get all master original failed";

export const getAllMasterOriginal ={
	type : GET_ALL_MASTER_ORIGINAL,
}
export const setDataMasterOriginalSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_ORIGINAL_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterOriginalFailed =({error}) => ({
	type : SET_DATA_MASTER_ORIGINAL_FAILED,
	payload : { data : error }
})