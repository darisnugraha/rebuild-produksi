const getAllLaporanSaldoBahanPusat = (state) =>
  state.laporansaldobahanpusat.feedback;
const getErrorLaporanSaldoBahanPusat = (state) =>
  state.laporansaldobahanpusat.error;
const getIsEditLaporanSaldoBahanPusat = (state) =>
  state.laporansaldobahanpusat.isEdit;
const data = {
  getAllLaporanSaldoBahanPusat,
  getErrorLaporanSaldoBahanPusat,
  getIsEditLaporanSaldoBahanPusat,
};
export default data;
