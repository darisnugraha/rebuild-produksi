export const GET_ALL_MASTER_BAHAN = "[masterbahan] get all master bahan";
export const SET_DATA_MASTER_BAHAN_SUCCESS = "[masterbahan] get all master bahan success";
export const SET_DATA_MASTER_BAHAN_FAILED = "[masterbahan] get all master bahan failed";

export const getAllMasterBahan ={
	type : GET_ALL_MASTER_BAHAN,
}
export const setDataMasterBahanSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_BAHAN_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterBahanFailed =({error}) => ({
	type : SET_DATA_MASTER_BAHAN_FAILED,
	payload : { data : error }
})