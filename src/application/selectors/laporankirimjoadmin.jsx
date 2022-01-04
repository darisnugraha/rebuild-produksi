const getAllLaporanKirimJoAdmin = (state) => state.laporankirimjoadmin.feedback;
const getErrorLaporanKirimJoAdmin = (state) => state.laporankirimjoadmin.error;
const getIsEditLaporanKirimJoAdmin = (state) =>
  state.laporankirimjoadmin.isEdit;
const data = {
  getAllLaporanKirimJoAdmin,
  getErrorLaporanKirimJoAdmin,
  getIsEditLaporanKirimJoAdmin,
};
export default data;
