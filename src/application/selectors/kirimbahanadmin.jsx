const getAllDivisi = (state) => state.kirimbahanadmin.feedback;
const getTukangDivisi = (state) => state.kirimbahanadmin.feedbackTukang;
const getErrorDivisi = (state) => state.kirimbahanadmin.error;
const getIsEditDivisi = (state) => state.kirimbahanadmin.isEdit;
const data = {
  getAllDivisi,
  getTukangDivisi,
  getErrorDivisi,
  getIsEditDivisi,
};
export default data;
