const getTotalAbu = (state) => state.abutukang.total_abu;
const getTotal24K = (state) => state.abutukang.total_24k;
const getAllAbuTukang = (state) => state.abutukang.feedback;
const getErrorAbuTukang = (state) => state.abutukang.error;
const getIsEditAbuTukang = (state) => state.abutukang.isEdit;
const getDivisiSusutTukang = (state) => state.abutukang.divisiSusut;
const getTukangByDivisi = (state) => state.abutukang.tukangByDivisi;

const data = {
  getTotalAbu,
  getTotal24K,
  getAllAbuTukang,
  getErrorAbuTukang,
  getIsEditAbuTukang,
  getDivisiSusutTukang,
  getTukangByDivisi,
};
export default data;
