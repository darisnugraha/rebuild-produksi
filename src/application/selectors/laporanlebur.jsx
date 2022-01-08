const getAllLaporanKirimLebur = (state) => state.laporanlebur.feedback;
const getAllLaporanTerimaLebur = (state) => state.laporanlebur.feedbackTerima;
const getErrorLaporanKirimLebur = (state) => state.laporanlebur.error;
const getErrorLaporanTerimaLebur = (state) => state.laporanlebur.errorTerima;
const getIsEditLaporanLebur = (state) => state.laporanlebur.isEdit;
const data = {
  getAllLaporanKirimLebur,
  getAllLaporanTerimaLebur,
  getErrorLaporanKirimLebur,
  getErrorLaporanTerimaLebur,
  getIsEditLaporanLebur,
};
export default data;
