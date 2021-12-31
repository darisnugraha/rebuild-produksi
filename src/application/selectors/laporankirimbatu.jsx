const getAllLaporanKirimBatu = (state) => state.laporankirimbatu.feedback;
const getErrorLaporanKirimBatu = (state) => state.laporankirimbatu.error;
const getIsEditLaporanKirimBatu = (state) => state.laporankirimbatu.isEdit;
const data = {
  getAllLaporanKirimBatu,
  getErrorLaporanKirimBatu,
  getIsEditLaporanKirimBatu,
};
export default data;
