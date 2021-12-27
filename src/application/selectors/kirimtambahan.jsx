const getAllAsalStockBahan = (state) => state.kirimtambahan.feedback;
const getAllKirimTambahanDivisi = (state) => state.kirimtambahan.feedbackDivisi;
const getStockBahanAdmin = (state) => state.kirimtambahan.dataStock;
const getErrorKirimTambahan = (state) => state.kirimtambahan.error;
const getIsEditKirimTambahan = (state) => state.kirimtambahan.isEdit;
const data = {
  getAllAsalStockBahan,
  getAllKirimTambahanDivisi,
  getStockBahanAdmin,
  getErrorKirimTambahan,
  getIsEditKirimTambahan,
};
export default data;
