const getAllLaporanKirimMasak = (state) => state.laporanmasak.feedback;
const getAllLaporanTerimaMasak = (state) => state.laporanmasak.feedbackTerima;
const getErrorLaporanKirimMasak = (state) => state.laporanmasak.error;
const getErrorLaporanTerimaMasak = (state) => state.laporanmasak.errorTerima;
const getIsEditLaporanMasak = (state) => state.laporanmasak.isEdit;
const data = {
  getAllLaporanKirimMasak,
  getAllLaporanTerimaMasak,
  getErrorLaporanKirimMasak,
  getErrorLaporanTerimaMasak,
  getIsEditLaporanMasak,
};
export default data;
