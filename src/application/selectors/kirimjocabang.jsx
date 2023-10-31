const getDataDetailJO = (state) => state.kirimjocabang.dataDetailJO;
const getErrorDataDetailJO = (state) => state.kirimjocabang.error;
const getIsEditDataDetailJO = (state) => state.kirimjocabang.isEdit;
const getDataNoInduk = (state) => state.kirimjocabang.dataNoInduk;
const getDataNoJO = (state) => state.kirimjocabang.detailJO;
const getIsEditJO = (state) => state.kirimjocabang.isEditJO;
const getIsEditBatu = (state) => state.kirimjocabang.isEditBatu;
const getIsEditTambahan = (state) => state.kirimjocabang.isEditTambahan;
const getDataTukang = (state) => state.kirimjocabang.dataTukang;
const getAllCAbang = (state) => state.kirimjocabang.cabang;
const data = {
  getDataDetailJO,
  getErrorDataDetailJO,
  getIsEditDataDetailJO,
  getDataNoInduk,
  getDataNoJO,
  getIsEditJO,
  getIsEditBatu,
  getIsEditTambahan,
  getDataTukang,
  getAllCAbang,
};
export default data;
