export const GET_ALL_MASTER_UKURAN = "[masterukuran] get all master ukuran";
export const SET_DATA_MASTER_UKURAN_SUCCESS = "[masterukuran] get all master ukuran success";
export const SET_DATA_MASTER_UKURAN_FAILED = "[masterukuran] get all master ukuran failed";

export const getAllMasterUkuran ={
	type : GET_ALL_MASTER_UKURAN,
}
export const setDataMasterUkuranSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_UKURAN_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterUkuranFailed =({error}) => ({
	type : SET_DATA_MASTER_UKURAN_FAILED,
	payload : { data : error }
})