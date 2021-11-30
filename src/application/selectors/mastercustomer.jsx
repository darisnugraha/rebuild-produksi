const getAllMasterCustomer = (state) => state.mastercustomer.feedback;
const getErrorMasterCustomer = (state) => state.mastercustomer.error;
const getIsEditMasterCustomer = (state) => state.mastercustomer.isEdit;
const data = { getAllMasterCustomer, getErrorMasterCustomer, getIsEditMasterCustomer};
export default data;