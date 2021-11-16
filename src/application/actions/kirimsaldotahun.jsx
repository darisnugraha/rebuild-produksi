export const GET_ALL_KIRIM_SALDO_TAHUN = "[kirimsaldotahun] get all kirimsaldotahun";
export const SET_DATA_KIRIM_SALDO_TAHUN_SUCCESS = "[kirimsaldotahun] get all kirimsaldotahun success";
export const SET_DATA_KIRIM_SALDO_TAHUN_FAILED = "[kirimsaldotahun] get all kirimsaldotahun failed";

export const getAllKirimsaldotahun ={
	type : GET_ALL_KIRIM_SALDO_TAHUN,
}
export const setDataKirimsaldotahunSuccess =(feedback) => ({
	type : SET_DATA_KIRIM_SALDO_TAHUN_SUCCESS,
	payload : { data : feedback }
})
export const setDataKirimsaldotahunFailed =(error) => ({
	type : SET_DATA_KIRIM_SALDO_TAHUN_FAILED,
	payload : { data : error }
})