const getAllMasterBahan = (state) => state.masterbahan.feedback;
const getErrorMasterBahan = (state) => state.masterbahan.error;
const getIsEditMasterBahan = (state) => state.masterbahan.isEdit;
const getIsVisibleMasterBahan = (state) => state.masterbahan.isVisible;
const getDataEditMasterBahan = (state) => state.masterbahan.dataEdit;
const data = {
  getAllMasterBahan,
  getErrorMasterBahan,
  getIsEditMasterBahan,
  getIsVisibleMasterBahan,
  getDataEditMasterBahan,
};
export default data;
