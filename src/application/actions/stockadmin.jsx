export const GET_ALL_STOCK_ADMIN = "[stockadmin] get all stockadmin";
export const SET_DATA_STOCK_ADMIN_SUCCESS = "[stockadmin] get all stockadmin success";
export const SET_DATA_STOCK_ADMIN_FAILED = "[stockadmin] get all stockadmin failed";

export const getAllStockAdmin ={
	type : GET_ALL_STOCK_ADMIN,
}
export const setDataStockAdminSuccess =(feedback) => ({
	type : SET_DATA_STOCK_ADMIN_SUCCESS,
	payload : { data : feedback }
})
export const setDataStockAdminFailed =(error) => ({
	type : SET_DATA_STOCK_ADMIN_FAILED,
	payload : { data : error }
})