const getAllHistoryKirimLebur = (state) => state.kirimlebur.feedbackHistory;
const getErrorHistoryKirimLebur = (state) => state.kirimlebur.errorHistory;
const getAsalBahanKirimLebur = (state) => state.kirimlebur.asalBahan;
const getAllSaldoBahanOpen = (state) => state.kirimlebur.feedbackSaldoBahan;
const getErrorSaldoBahanOpen = (state) => state.kirimlebur.errorSaldoBahan;
const getAllSaldoBahan = (state) => state.kirimlebur.feedback;
const getErrorSaldoBahan = (state) => state.kirimlebur.error;
const data = {
  getAllHistoryKirimLebur,
  getErrorHistoryKirimLebur,
  getAsalBahanKirimLebur,
  getAllSaldoBahanOpen,
  getErrorSaldoBahanOpen,
  getAllSaldoBahan,
  getErrorSaldoBahan,
};
export default data;
