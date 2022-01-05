const getAllLaporanTerimaJoAdmin = (state) =>
  state.laporanterimajoadmin.feedback;
const getErrorLaporanTerimaJoAdmin = (state) =>
  state.laporanterimajoadmin.error;
const getIsEditLaporanTerimaJoAdmin = (state) =>
  state.laporanterimajoadmin.isEdit;
const data = {
  getAllLaporanTerimaJoAdmin,
  getErrorLaporanTerimaJoAdmin,
  getIsEditLaporanTerimaJoAdmin,
};
export default data;
