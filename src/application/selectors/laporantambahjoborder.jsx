const getAllLaporanTambahJobOrder = (state) =>
  state.laporantambahjoborder.feedback;
const getErrorLaporanTambahJobOrder = (state) =>
  state.laporantambahjoborder.error;
const getIsEditLaporanTambahJobOrder = (state) =>
  state.laporantambahjoborder.isEdit;
const data = {
  getAllLaporanTambahJobOrder,
  getErrorLaporanTambahJobOrder,
  getIsEditLaporanTambahJobOrder,
};
export default data;
