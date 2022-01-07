const getAllLaporanSetorAbuPotong = (state) =>
  state.laporansetorabupotong.feedback;
const getErrorLaporanSetorAbuPotong = (state) =>
  state.laporansetorabupotong.error;
const getIsEditLaporanSetorAbuPotong = (state) =>
  state.laporansetorabupotong.isEdit;

const data = {
  getAllLaporanSetorAbuPotong,
  getErrorLaporanSetorAbuPotong,
  getIsEditLaporanSetorAbuPotong,
};

export default data;
