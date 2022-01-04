const getAllLaporanTerimaPotong = (state) => state.laporanterimapotong.feedback;
const getErrorLaporanTerimaPotong = (state) => state.laporanterimapotong.error;
const getIsEditLaporanTerimaPotong = (state) =>
  state.laporanterimapotong.isEdit;
const data = {
  getAllLaporanTerimaPotong,
  getErrorLaporanTerimaPotong,
  getIsEditLaporanTerimaPotong,
};
export default data;
