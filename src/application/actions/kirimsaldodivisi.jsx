export const GET_ALL_KIRIM_SALDO_DIVISI = "[kirimsaldodivisi] get all kirimsaldodivisi";
export const SET_DATA_KIRIM_SALDO_DIVISI_SUCCESS = "[kirimsaldodivisi] get all kirimsaldodivisi success";
export const SET_DATA_KIRIM_SALDO_DIVISI_FAILED = "[kirimsaldodivisi] get all kirimsaldodivisi failed";

export const getAllKirimsaldodivisi ={
	type : GET_ALL_KIRIM_SALDO_DIVISI,
}
export const setDataKirimsaldodivisiSuccess =({feedback}) => ({
	type : SET_DATA_KIRIM_SALDO_DIVISI_SUCCESS,
	payload : { data : feedback }
})
export const setDataKirimsaldodivisiFailed =({error}) => ({
	type : SET_DATA_KIRIM_SALDO_DIVISI_FAILED,
	payload : { data : error }
})