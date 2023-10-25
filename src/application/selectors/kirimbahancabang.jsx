const getAllDivisi = (state) => state.kirimbahancabang.feedback;
const getTukangDivisi = (state) => state.kirimbahancabang.feedbackTukang;
const getErrorDivisi = (state) => state.kirimbahancabang.error;
const getIsEditDivisi = (state) => state.kirimbahancabang.isEdit;
const getAllCAbang = (state) => state.kirimjocabang.cabang;
const data = {
  getAllDivisi,
  getTukangDivisi,
  getErrorDivisi,
  getIsEditDivisi,
  getAllCAbang,
};
export default data;
