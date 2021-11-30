export const GET_ALL_MASTER_JENIS_BATU = "[masterjenisbatu] get all master jenis batu";
export const SET_DATA_MASTER_JENIS_BATU_SUCCESS = "[masterjenisbatu] get all master jenis batu success";
export const SET_DATA_MASTER_JENIS_BATU_FAILED = "[masterjenisbatu] get all master jenis batu failed";

export const getAllMasterJenisBatu ={
	type : GET_ALL_MASTER_JENIS_BATU,
}
export const setDataMasterJenisBatuSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_JENIS_BATU_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterJenisBatuFailed =({error}) => ({
	type : SET_DATA_MASTER_JENIS_BATU_FAILED,
	payload : { data : error }
})