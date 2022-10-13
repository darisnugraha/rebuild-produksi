const getAllSetorOutstandPotong = (state) => state.abutukangpotong.feedback;
const getErrorAbuTukangPotong = (state) => state.abutukangpotong.error;
const getIsEditAbuTukangPotong = (state) => state.abutukangpotong.isEdit;
const getTotalAbu = (state) => state.abutukangpotong.total_abu;
const getTotal24K = (state) => state.abutukangpotong.total_24k;
const data = {
  getTotalAbu,
  getTotal24K,
  getAllSetorOutstandPotong,
  getErrorAbuTukangPotong,
  getIsEditAbuTukangPotong,
};
export default data;
