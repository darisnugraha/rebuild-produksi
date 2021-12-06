const getAllMasterTukang = (state) => state.mastertukang.feedback;
const getErrorMasterTukang = (state) => state.mastertukang.error;
const getIsEditMasterTukang = (state) => state.mastertukang.isEdit;
const getIsVisibleMasterTukang = (state) => state.mastertukang.isVisible;
const getDataEditMasterTukang = (state) => state.mastertukang.dataEdit;
const data = {
  getAllMasterTukang,
  getErrorMasterTukang,
  getIsEditMasterTukang,
  getIsVisibleMasterTukang,
  getDataEditMasterTukang,
};
export default data;
