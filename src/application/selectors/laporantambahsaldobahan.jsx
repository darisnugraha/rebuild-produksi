const getAllLaporanTambahSaldoBahan = (state) =>
  state.laporantambahsaldobahan.feedback;
const getErrorLaporanTambahSaldoBahan = (state) =>
  state.laporantambahsaldobahan.error;
const getIsEditLaporanTambahSaldoBahan = (state) =>
  state.laporantambahsaldobahan.isEdit;
const data = {
  getAllLaporanTambahSaldoBahan,
  getErrorLaporanTambahSaldoBahan,
  getIsEditLaporanTambahSaldoBahan,
};
export default data;
