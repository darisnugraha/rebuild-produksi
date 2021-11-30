const getAllMasterKondisi = (state) => state.masterkondisi.feedback;
const getErrorMasterKondisi = (state) => state.masterkondisi.error;
const getIsEditMasterKondisi = (state) => state.masterkondisi.isEdit;
const data = {
  getAllMasterKondisi,
  getErrorMasterKondisi,
  getIsEditMasterKondisi,
};
export default data;
