export const GET_ALL_MASTER_CUTTING_BATU = "[mastercuttingbatu] get all master cutting batu";
export const SET_DATA_MASTER_CUTTING_BATU_SUCCESS = "[mastercuttingbatu] get all master cutting batu success";
export const SET_DATA_MASTER_CUTTING_BATU_FAILED = "[mastercuttingbatu] get all master cutting batu failed";

export const getAllMasterCuttingBatu ={
	type : GET_ALL_MASTER_CUTTING_BATU,
}
export const setDataMasterCuttingBatuSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_CUTTING_BATU_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterCuttingBatuFailed =({error}) => ({
	type : SET_DATA_MASTER_CUTTING_BATU_FAILED,
	payload : { data : error }
})