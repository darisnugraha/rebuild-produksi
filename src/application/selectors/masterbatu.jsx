const getAllMasterBatu = (state) => state.masterbatu.feedback;
const getErrorMasterBatu = (state) => state.masterbatu.error;
const getIsEditMasterBatu = (state) => state.masterbatu.isEdit;
const getIsVisibleMasterBatu = (state) => state.masterbatu.isVisible;
const getDataEditMasterBatu = (state) => state.masterbatu.dataEdit;
const data = {
  getAllMasterBatu,
  getErrorMasterBatu,
  getIsEditMasterBatu,
  getIsVisibleMasterBatu,
  getDataEditMasterBatu,
};
export default data;
