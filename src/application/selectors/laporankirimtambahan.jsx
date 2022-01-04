const getAllLaporanKirimTambahan = (state) =>
  state.laporankirimtambahan.feedback;
const getErrorLaporanKirimTambahan = (state) =>
  state.laporankirimtambahan.error;
const getIsEditLaporanKirimTambahan = (state) =>
  state.laporankirimtambahan.isEdit;

const data = {
  getAllLaporanKirimTambahan,
  getErrorLaporanKirimTambahan,
  getIsEditLaporanKirimTambahan,
};

export default data;
