const getAllMasterMarketing = (state) => state.mastermarketing.feedback;
const getErrorMasterMarketing = (state) => state.mastermarketing.error;
const getIsEditMasterMarketing = (state) => state.mastermarketing.isEdit;
const getIsVisibleMasterMarketing = (state) => state.mastermarketing.isVisible;
const getDataEditMasterMarketing = (state) => state.mastermarketing.dataEdit;
const data = {
  getAllMasterMarketing,
  getErrorMasterMarketing,
  getIsEditMasterMarketing,
  getIsVisibleMasterMarketing,
  getDataEditMasterMarketing,
};
export default data;
