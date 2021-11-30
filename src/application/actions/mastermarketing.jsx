export const GET_ALL_MASTER_MARKETING = "[mastermarketing] get all master marketing";
export const SET_DATA_MASTER_MARKETING_SUCCESS = "[mastermarketing] get all master marketing success";
export const SET_DATA_MASTER_MARKETING_FAILED = "[mastermarketing] get all master marketing failed";

export const getAllMasterMarketing ={
	type : GET_ALL_MASTER_MARKETING,
}
export const setDataMasterMarketingSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_MARKETING_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterMarketingFailed =({error}) => ({
	type : SET_DATA_MASTER_MARKETING_FAILED,
	payload : { data : error }
})