export const GET_ALL_SALDO_BAHAN = "[saldobahan] get all saldobahan";
export const SET_DATA_SALDO_BAHAN_SUCCESS = "[saldobahan] get all saldobahan success";
export const SET_DATA_SALDO_BAHAN_FAILED = "[saldobahan] get all saldobahan failed";

export const getAllSaldobahan ={
	type : GET_ALL_SALDO_BAHAN,
}
export const setDataSaldobahanSuccess =({feedback}) => ({
	type : SET_DATA_SALDO_BAHAN_SUCCESS,
	payload : { data : feedback }
})
export const setDataSaldobahanFailed =({error}) => ({
	type : SET_DATA_SALDO_BAHAN_FAILED,
	payload : { data : error }
})