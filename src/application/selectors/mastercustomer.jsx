const getAllMasterCustomer = (state) => state.mastercustomer.feedback;
const getErrorMasterCustomer = (state) => state.mastercustomer.error;
const getIsEditMasterCustomer = (state) => state.mastercustomer.isEdit;
const getIsVisibleMasterCustomer = (state) => state.mastercustomer.isVisible;
const getDataEditMasterCustomer = (state) => state.mastercustomer.dataEdit;
const data = {
  getAllMasterCustomer,
  getErrorMasterCustomer,
  getIsEditMasterCustomer,
  getIsVisibleMasterCustomer,
  getDataEditMasterCustomer,
};
export default data;
