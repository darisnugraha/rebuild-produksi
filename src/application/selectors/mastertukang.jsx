const getAllMasterTukang = (state) => state.mastertukang.feedback;
const getErrorMasterTukang = (state) => state.mastertukang.error;
const getIsEditMasterTukang = (state) => state.mastertukang.isEdit;
const data = {
  getAllMasterTukang,
  getErrorMasterTukang,
  getIsEditMasterTukang,
};
export default data;
