const getAllMasterJenis= (state) => state.masterjenis.feedback;
const getErrorMasterJenis= (state) => state.masterjenis.error;
const getIsEditMasterJenis= (state) => state.masterjenis.isEdit;
const data = { getAllMasterJenis, getErrorMasterJenis, getIsEditMasterJenis };
export default data;