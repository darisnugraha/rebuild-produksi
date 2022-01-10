const getAllTerimaProduksi = (state) => state.laporanproduksi.feedbackTerima;
const getErrorTerimaProduksi = (state) => state.laporanproduksi.errorTerima;
const getAllTerimaTambahanProduksi = (state) =>
  state.laporanproduksi.feedbackTambahan;
const getErrorTerimaTambahanProduksi = (state) =>
  state.laporanproduksi.errorTambahan;
const getAllKirimProduksi = (state) => state.laporanproduksi.feedback;
const getErrorKirimProduksi = (state) => state.laporanproduksi.error;
const getIsEditLaporanProduksi = (state) => state.laporanproduksi.isEdit;
const data = {
  getAllTerimaProduksi,
  getErrorTerimaProduksi,
  getAllKirimProduksi,
  getErrorKirimProduksi,
  getIsEditLaporanProduksi,
  getAllTerimaTambahanProduksi,
  getErrorTerimaTambahanProduksi,
};
export default data;
