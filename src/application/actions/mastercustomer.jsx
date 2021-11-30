export const GET_ALL_MASTER_CUSTOMER = "[mastercustomer] get all master customer";
export const SET_DATA_MASTER_CUSTOMER_SUCCESS = "[mastercustomer] get all master customer success";
export const SET_DATA_MASTER_CUSTOMER_FAILED = "[mastercustomer] get all master customer failed";

export const getAllMasterCustomer ={
	type : GET_ALL_MASTER_CUSTOMER,
}
export const setDataMasterCustomerSuccess =({feedback}) => ({
	type : SET_DATA_MASTER_CUSTOMER_SUCCESS,
	payload : { data : feedback }
})
export const setDataMasterCustomerFailed =({error}) => ({
	type : SET_DATA_MASTER_CUSTOMER_FAILED,
	payload : { data : error }
})