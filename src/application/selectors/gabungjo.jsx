const getAllGabungJO = (state) => state.gabungjo.feedback;
const getErrorGabungJO = (state) => state.gabungjo.error;
const getIsEditGabungJO = (state) => state.gabungjo.isEdit;
const getDataNoInduk = (state) => state.gabungjo.feedbackNoInduk;
const getDataNoJO = (state) => state.gabungjo.dataJobOrder;
const data = {
  getAllGabungJO,
  getErrorGabungJO,
  getIsEditGabungJO,
  getDataNoInduk,
  getDataNoJO,
};
export default data;
