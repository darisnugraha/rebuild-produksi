export const GET_ALL_MASTER_BATU = "[masterbatu] get all master batu";
export const SET_DATA_MASTER_BATU_SUCCESS = "[masterbatu] get all master batu success";
export const SET_DATA_MASTER_BATU_FAILED = "[masterbatu] get all master batu failed";

export const getAllMasterBatu ={
	type : GET_ALL_MASTER_BATU,
}
export const setDataMasterBatuSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_BATU_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterBatuFailed =({error}) => ({
	type : SET_DATA_MASTER_BATU_FAILED,
	payload : { data : error }
})