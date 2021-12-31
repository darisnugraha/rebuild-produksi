const getAllLaporanTambahAmbilSaldoBatu = (state) =>
  state.laporantambahambilsaldobatu.feedback;
const getErrorLaporanTambahAmbilSaldoBatu = (state) =>
  state.laporantambahambilsaldobatu.error;
const getIsEditLaporanTambahAmbilSaldoBatu = (state) =>
  state.laporantambahambilsaldobatu.isEdit;
const data = {
  getAllLaporanTambahAmbilSaldoBatu,
  getErrorLaporanTambahAmbilSaldoBatu,
  getIsEditLaporanTambahAmbilSaldoBatu,
};
export default data;
