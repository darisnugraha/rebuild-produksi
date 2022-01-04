const getAllLaporanKirimBatuPusat = (state) =>
  state.laporankirimbatupusat.feedback;
const getErrorLaporanKirimBatuPusat = (state) =>
  state.laporankirimbatupusat.error;
const getIsEditLaporanKirimBatuPusat = (state) =>
  state.laporankirimbatupusat.isEdit;
const data = {
  getAllLaporanKirimBatuPusat,
  getErrorLaporanKirimBatuPusat,
  getIsEditLaporanKirimBatuPusat,
};
export default data;
