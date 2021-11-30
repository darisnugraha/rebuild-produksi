export const GET_ALL_MASTER_JENIS = "[masterjenis] get all master jenis";
export const SET_DATA_MASTER_JENIS_SUCCESS = "[masterjenis] get all master jenis success";
export const SET_DATA_MASTER_JENIS_FAILED = "[masterjenis] get all master jenis failed";

export const getAllMasterJenis ={
	type : GET_ALL_MASTER_JENIS,
}
export const setDataMasterJenisSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_JENIS_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterJenisFailed =({error}) => ({
	type : SET_DATA_MASTER_JENIS_FAILED,
	payload : { data : error }
})