const getAllMasterUser = (state) => state.masteruser.feedback;
const getErrorMasterUser = (state) => state.masteruser.error;
const getIsEditMasterUser = (state) => state.masteruser.isEdit;
const getIsVisibleMasterUser = (state) => state.masteruser.isVisible;
const getDataEditMasterUser = (state) => state.masteruser.dataEdit;
const data = {
  getAllMasterUser,
  getErrorMasterUser,
  getIsEditMasterUser,
  getIsVisibleMasterUser,
  getDataEditMasterUser,
};
export default data;
