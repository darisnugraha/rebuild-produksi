const getAllCetakBarcode = (state) => state.cetakbarcode.feedback;
const getJOByNoInduk = (state) => state.cetakbarcode.feedbackJO;
const getErrorCetakBarcode = (state) => state.cetakbarcode.error;
const getIsEditCetakBarcode = (state) => state.cetakbarcode.isEdit;
const data = {
  getAllCetakBarcode,
  getJOByNoInduk,
  getErrorCetakBarcode,
  getIsEditCetakBarcode,
};
export default data;
