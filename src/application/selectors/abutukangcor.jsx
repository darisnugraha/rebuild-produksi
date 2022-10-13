const getAllSetorOutstandCasting = (state) => state.abutukangcor.feedback;
const getErrorAbuTukangCOR = (state) => state.abutukangcor.error;
const getIsEditAbuTukangCOR = (state) => state.abutukangcor.isEdit;
const getTotalAbu = (state) => state.abutukangcor.total_abu;
const getTotal24K = (state) => state.abutukangcor.total_24k;
const data = {
  getAllSetorOutstandCasting,
  getErrorAbuTukangCOR,
  getIsEditAbuTukangCOR,
  getTotalAbu,
  getTotal24K,
};
export default data;
