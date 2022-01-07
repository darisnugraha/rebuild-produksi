const getAllLaporanSetorAbuTukang = (state) =>
  state.laporansetorabutukang.feedback;
const getErrorLaporanSetorAbuTukang = (state) =>
  state.laporansetorabutukang.error;
const getIsEditLaporanSetorAbuTukang = (state) =>
  state.laporansetorabutukang.isEdit;

const data = {
  getAllLaporanSetorAbuTukang,
  getErrorLaporanSetorAbuTukang,
  getIsEditLaporanSetorAbuTukang,
};

export default data;
