const getAllLaporanPembuatanJenisBahan = (state) =>
  state.laporanpembuatanjenisbahan.feedback;
const getErrorLaporanPembuatanJenisBahan = (state) =>
  state.laporanpembuatanjenisbahan.error;
const getIsEditLaporanPembuatanJenisBahan = (state) =>
  state.laporanpembuatanjenisbahan.isEdit;
const data = {
  getAllLaporanPembuatanJenisBahan,
  getErrorLaporanPembuatanJenisBahan,
  getIsEditLaporanPembuatanJenisBahan,
};
export default data;
