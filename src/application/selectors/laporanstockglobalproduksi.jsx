const getAllLaporanStockGlobalProduksiR = (state) => state.laporanStockGlobalProduksi.feedback_R;
const getAllLaporanStockGlobalProduksiL = (state) => state.laporanStockGlobalProduksi.feedback_L;
const getErrorLaporanStockGlobalProduksi = (state) => state.laporanStockGlobalProduksi.error;
const getIsEditLaporanStockGlobalProduksi = (state) => state.laporanStockGlobalProduksi.isEdit;
const data = {
  getAllLaporanStockGlobalProduksiR,
  getAllLaporanStockGlobalProduksiL,
  getErrorLaporanStockGlobalProduksi,
  getIsEditLaporanStockGlobalProduksi,
};
export default data;
