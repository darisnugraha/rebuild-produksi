export const GET_ALL_MASTER_JENIS_BAHAN = "[masterjenisbahan] get all master jenis bahan";
export const SET_DATA_MASTER_JENIS_BAHAN_SUCCESS = "[masterjenisbahan] get all master jenis bahan success";
export const SET_DATA_MASTER_JENIS_BAHAN_FAILED = "[masterjenisbahan] get all master jenis bahan failed";

export const getAllMasterJenisBahan ={
	type : GET_ALL_MASTER_JENIS_BAHAN,
}
export const setDataMasterJenisBahanSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_JENIS_BAHAN_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterJenisBahanFailed =({error}) => ({
	type : SET_DATA_MASTER_JENIS_BAHAN_FAILED,
	payload : { data : error }
})