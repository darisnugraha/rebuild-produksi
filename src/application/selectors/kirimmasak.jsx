const getAllHistoryKirimMasak = (state) => state.kirimmasak.feedbackHistory;
const getErrorKirimMasak = (state) => state.kirimmasak.error;
const getIsEditKirimMasak = (state) => state.kirimmasak.isEdit;
const data = {
  getAllHistoryKirimMasak,
  getErrorKirimMasak,
  getIsEditKirimMasak,
};
export default data;
