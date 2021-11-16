export const GET_ALL_KIRIM_DESIAN = "[kirimdesian] get all kirimdesian";
export const SET_DATA_KIRIM_DESIAN_SUCCESS = "[kirimdesian] get all kirimdesian success";
export const SET_DATA_KIRIM_DESIAN_FAILED = "[kirimdesian] get all kirimdesian failed";

export const getAllKirimdesian ={
	type : GET_ALL_KIRIM_DESIAN,
}
export const setDataKirimdesianSuccess =({feedback}) => ({
	type : SET_DATA_KIRIM_DESIAN_SUCCESS,
	payload : { data : feedback }
})
export const setDataKirimdesianFailed =({error}) => ({
	type : SET_DATA_KIRIM_DESIAN_FAILED,
	payload : { data : error }
})