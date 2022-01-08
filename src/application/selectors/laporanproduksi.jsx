const getAllTerimaProduksi = (state) => state.laporanproduksi.feedbackTerima;
const getErrorTerimaProduksi = (state) => state.laporanproduksi.errorTerima;
const getAllKirimProduksi = (state) => state.laporanproduksi.feedback;
const getErrorKirimProduksi = (state) => state.laporanproduksi.error;
const getIsEditLaporanProduksi = (state) => state.laporanproduksi.isEdit;
const data = {
  getAllTerimaProduksi,
  getErrorTerimaProduksi,
  getAllKirimProduksi,
  getErrorKirimProduksi,
  getIsEditLaporanProduksi,
};
export default data;
