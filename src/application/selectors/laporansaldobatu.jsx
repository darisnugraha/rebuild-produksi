const getAllLaporanSaldoBatu = (state) => state.laporansaldobatu.feedback;
const getErrorLaporanSaldoBatu = (state) => state.laporansaldobatu.error;
const getIsEditLaporanSaldoBatu = (state) => state.laporansaldobatu.isEdit;
const data = {
  getAllLaporanSaldoBatu,
  getErrorLaporanSaldoBatu,
  getIsEditLaporanSaldoBatu,
};
export default data;
