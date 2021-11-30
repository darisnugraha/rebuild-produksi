export const GET_ALL_MASTER_KONDISI = "[masterkondisi] get all master kondisi";
export const SET_DATA_MASTER_KONDISI_SUCCESS = "[masterkondisi] get all master kondisi success";
export const SET_DATA_MASTER_KONDISI_FAILED = "[masterkondisi] get all master kondisi failed";

export const getAllMasterKondisi ={
	type : GET_ALL_MASTER_KONDISI,
}
export const setDataMasterKondisiSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_KONDISI_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterKondisiFailed =({error}) => ({
	type : SET_DATA_MASTER_KONDISI_FAILED,
	payload : { data : error }
})