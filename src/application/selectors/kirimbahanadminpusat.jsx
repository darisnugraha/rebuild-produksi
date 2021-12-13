const getAllStockBahanDivisi = (state) => state.kirimbahanadminpusat.feedback;
const getAllStaffStockBahanDivisi = (state) =>
  state.kirimbahanadminpusat.dataStaff;
const getAllStockBahanByStaff = (state) =>
  state.kirimbahanadminpusat.dataStockBahan;
const getErrorKirimBahanAdminPusat = (state) =>
  state.kirimbahanadminpusat.error;
const getIsEditKirimBahanAdminPusat = (state) =>
  state.kirimbahanadminpusat.isEdit;
const data = {
  getAllStockBahanDivisi,
  getAllStaffStockBahanDivisi,
  getAllStockBahanByStaff,
  getErrorKirimBahanAdminPusat,
  getIsEditKirimBahanAdminPusat,
};
export default data;
