const getAllAsalStockBahan = (state) => state.kirimtambahan.feedback;
const getStockBahanAdmin = (state) => state.kirimtambahan.dataStock;
const getErrorKirimTambahan = (state) => state.kirimtambahan.error;
const getIsEditKirimTambahan = (state) => state.kirimtambahan.isEdit;
const data = {
  getAllAsalStockBahan,
  getStockBahanAdmin,
  getErrorKirimTambahan,
  getIsEditKirimTambahan,
};
export default data;
