const getAllTerimaProduksi = (state) => state.laporanproduksi.feedbackTerima;
const getErrorTerimaProduksi = (state) => state.laporanproduksi.errorTerima;
const getIsEditLaporanProduksi = (state) => state.laporanproduksi.isEdit;
const data = {
  getAllTerimaProduksi,
  getErrorTerimaProduksi,
  getIsEditLaporanProduksi,
};
export default data;
