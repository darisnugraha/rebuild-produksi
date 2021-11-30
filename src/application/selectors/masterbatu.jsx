const getAllMasterBatu= (state) => state.masterbatu.feedback;
const getErrorMasterBatu= (state) => state.masterbatu.error;
const getIsEditMasterBatu= (state) => state.masterbatu.isEdit;
const data = { getAllMasterBatu, getErrorMasterBatu, getIsEditMasterBatu};
export default data;