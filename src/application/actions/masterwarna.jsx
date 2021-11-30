export const GET_ALL_MASTER_WARNA = "[masterwarna] get all master warna";
export const SET_DATA_MASTER_WARNA_SUCCESS = "[masterwarna] get all master warna success";
export const SET_DATA_MASTER_WARNA_FAILED = "[masterwarna] get all master warna failed";

export const getAllMasterWarna ={
	type : GET_ALL_MASTER_WARNA,
}
export const setDataMasterWarnaSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_WARNA_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterWarnaFailed =({error}) => ({
	type : SET_DATA_MASTER_WARNA_FAILED,
	payload : { data : error }
})