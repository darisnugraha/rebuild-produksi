const getAllLaporanSaldoBahan = (state) => state.laporansaldobahan.feedback;
const getErrorLaporanSaldoBahan = (state) => state.laporansaldobahan.error;
const getIsEditLaporanSaldoBahan = (state) => state.laporansaldobahan.isEdit;
const data = {
  getAllLaporanSaldoBahan,
  getErrorLaporanSaldoBahan,
  getIsEditLaporanSaldoBahan,
};
export default data;
