const getAllTambahAmbilBatu = (state) => state.tambahambilbatu.feedback;
const getErrorTambahAmbilBatu = (state) => state.tambahambilbatu.error;
const getIsEditTambahAmbilBatu = (state) => state.tambahambilbatu.isEdit;
const getIsAddTambahAmbilBatu = (state) => state.tambahambilbatu.isAdd;
const getIsTakeTambahAmbilBatu = (state) => state.tambahambilbatu.isTake;
const getIsVisibleTambahAmbilBatu = (state) => state.tambahambilbatu.isVisible;
const getDataBatu = (state) => state.tambahambilbatu.dataBatu;
const data = {
  getAllTambahAmbilBatu,
  getErrorTambahAmbilBatu,
  getIsEditTambahAmbilBatu,
  getIsAddTambahAmbilBatu,
  getIsTakeTambahAmbilBatu,
  getIsVisibleTambahAmbilBatu,
  getDataBatu,
};
export default data;
