const getAllMasterJenisBahan = (state) => state.masterjenisbahan.feedback;
const getErrorMasterJenisBahan = (state) => state.masterjenisbahan.error;
const getIsEditMasterJenisBahan = (state) => state.masterjenisbahan.isEdit;
const data = { getAllMasterJenisBahan, getErrorMasterJenisBahan, getIsEditMasterJenisBahan };
export default data;