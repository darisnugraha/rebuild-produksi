const getAllStockBahanDivisi = (state) => state.kirimbahanadminpusat.feedback;
const getAllStaffStockBahanDivisi = (state) =>
  state.kirimbahanadminpusat.dataStaff;
const getAllStockBahanByStaff = (state) =>
  state.kirimbahanadminpusat.dataStockBahan;
const getErrorKirimBahanAdminPusat = (state) =>
  state.kirimbahanadminpusat.error;
const getIsEditKirimBahanAdminPusat = (state) =>
  state.kirimbahanadminpusat.isEdit;
const getAllDivisi = (state) => state.kirimbahanadminpusat.dataDivisi;
const getStaffByDivisi = (state) => state.kirimbahanadminpusat.dataStaffDivisi;
const data = {
  getAllStockBahanDivisi,
  getAllStaffStockBahanDivisi,
  getAllStockBahanByStaff,
  getErrorKirimBahanAdminPusat,
  getIsEditKirimBahanAdminPusat,
  getAllDivisi,
  getStaffByDivisi,
};
export default data;
