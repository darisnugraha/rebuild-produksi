const getAllMasterJenis = (state) => state.masterjenis.feedback;
const getErrorMasterJenis = (state) => state.masterjenis.error;
const getIsEditMasterJenis = (state) => state.masterjenis.isEdit;
const getIsVisibleMasterJenis = (state) => state.masterjenis.isVisible;
const getDataEditMasterJenis = (state) => state.masterjenis.dataEdit;
const data = {
  getAllMasterJenis,
  getErrorMasterJenis,
  getIsEditMasterJenis,
  getIsVisibleMasterJenis,
  getDataEditMasterJenis,
};
export default data;
