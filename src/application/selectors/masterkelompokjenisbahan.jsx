const getAllMasterKelompokJenisBahan = (state) =>
  state.masterkelompokjenisbahan.feedback;
const getErrorMasterKelompokJenisBahan = (state) =>
  state.masterkelompokjenisbahan.error;
const getIsEditMasterKelompokJenisBahan = (state) =>
  state.masterkelompokjenisbahan.isEdit;
const getIsVisibleMasterKelompokJenisBahan = (state) =>
  state.masterkelompokjenisbahan.isVisible;
const getDataEditMasterKelompokJenisBahan = (state) =>
  state.masterkelompokjenisbahan.dataEdit;
const data = {
  getAllMasterKelompokJenisBahan,
  getErrorMasterKelompokJenisBahan,
  getIsEditMasterKelompokJenisBahan,
  getIsVisibleMasterKelompokJenisBahan,
  getDataEditMasterKelompokJenisBahan,
};
export default data;
