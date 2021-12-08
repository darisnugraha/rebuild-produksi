const getAllDivisi = (state) => state.kirimbahanadmin.feedback;
const getErrorDivisi = (state) => state.kirimbahanadmin.error;
const getIsEditDivisi = (state) => state.kirimbahanadmin.isEdit;
const data = {
  getAllDivisi,
  getErrorDivisi,
  getIsEditDivisi,
};
export default data;
