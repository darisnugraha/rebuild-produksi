const getAllMasterMarketing = (state) => state.mastermarketing.feedback;
const getErrorMasterMarketing = (state) => state.mastermarketing.error;
const getIsEditMasterMarketing = (state) => state.mastermarketing.isEdit;
const data = {
  getAllMasterMarketing,
  getErrorMasterMarketing,
  getIsEditMasterMarketing,
};
export default data;
