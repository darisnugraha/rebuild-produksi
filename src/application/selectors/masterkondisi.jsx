const getAllMasterKondisi = (state) => state.masterkondisi.feedback;
const getErrorMasterKondisi = (state) => state.masterkondisi.error;
const getIsEditMasterKondisi = (state) => state.masterkondisi.isEdit;
const getIsVisibleMasterKondisi = (state) => state.masterkondisi.isVisible;
const getDataEditMasterKondisi = (state) => state.masterkondisi.dataEdit;
const data = {
  getAllMasterKondisi,
  getErrorMasterKondisi,
  getIsEditMasterKondisi,
  getIsVisibleMasterKondisi,
  getDataEditMasterKondisi,
};
export default data;
