const getAllLaporanTerimaBatu = (state) => state.laporanterimabatu.feedback;
const getErrorLaporanTerimaBatu = (state) => state.laporanterimabatu.error;
const getIsEditLaporanTerimaBatu = (state) => state.laporanterimabatu.isEdit;
const data = {
  getAllLaporanTerimaBatu,
  getErrorLaporanTerimaBatu,
  getIsEditLaporanTerimaBatu,
};
export default data;
