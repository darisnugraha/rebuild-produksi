const getAllLaporanOutstandAdmin = (state) =>
  state.laporanoutstandadmin.feedback;
const getErrorLaporanOutstandAdmin = (state) =>
  state.laporanoutstandadmin.error;
const getIsEditLaporanOutstandAdmin = (state) =>
  state.laporanoutstandadmin.isEdit;
const data = {
  getAllLaporanOutstandAdmin,
  getErrorLaporanOutstandAdmin,
  getIsEditLaporanOutstandAdmin,
};
export default data;
