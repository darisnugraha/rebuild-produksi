const getAllAbuTukang = (state) => state.abutukang.feedback;
const getErrorAbuTukang = (state) => state.abutukang.error;
const getIsEditAbuTukang = (state) => state.abutukang.isEdit;
const data = {
  getAllAbuTukang,
  getErrorAbuTukang,
  getIsEditAbuTukang,
};
export default data;
