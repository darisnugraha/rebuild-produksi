const getAllMasterCuttingBatu = (state) => state.mastercuttingbatu.feedback;
const getErrorMasterCuttingBatu = (state) => state.mastercuttingbatu.error;
const getIsEditMasterCuttingBatu = (state) => state.mastercuttingbatu.isEdit;
const getIsVisibleMasterCuttingBatu = (state) =>
  state.mastercuttingbatu.isVisible;
const getDataEditMasterCuttingBatu = (state) =>
  state.mastercuttingbatu.dataEdit;
const data = {
  getAllMasterCuttingBatu,
  getErrorMasterCuttingBatu,
  getIsEditMasterCuttingBatu,
  getIsVisibleMasterCuttingBatu,
  getDataEditMasterCuttingBatu,
};
export default data;
