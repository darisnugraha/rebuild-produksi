const getAllMasterStatus = (state) => state.masterstatus.feedback;
const getErrorMasterStatus = (state) => state.masterstatus.error;
const getIsEditMasterStatus = (state) => state.masterstatus.isEdit;
const getIsVisibleMasterStatus = (state) => state.masterstatus.isVisible;
const getDataEditMasterStatus = (state) => state.masterstatus.dataEdit;
const data = {
  getAllMasterStatus,
  getErrorMasterStatus,
  getIsEditMasterStatus,
  getIsVisibleMasterStatus,
  getDataEditMasterStatus,
};
export default data;
