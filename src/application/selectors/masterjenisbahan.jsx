const getAllMasterJenisBahan = (state) => state.masterjenisbahan.feedback;
const getErrorMasterJenisBahan = (state) => state.masterjenisbahan.error;
const getIsEditMasterJenisBahan = (state) => state.masterjenisbahan.isEdit;
const getIsVisibleMasterJenisBahan = (state) =>
  state.masterjenisbahan.isVisible;
const getDataEditMasterJenisBahan = (state) => state.masterjenisbahan.dataEdit;
const data = {
  getAllMasterJenisBahan,
  getErrorMasterJenisBahan,
  getIsEditMasterJenisBahan,
  getIsVisibleMasterJenisBahan,
  getDataEditMasterJenisBahan,
};
export default data;
