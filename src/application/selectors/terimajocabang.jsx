const getDataDetailJO = (state) => state.terimajocabang.detailJO;
const getErrorDataDetailJO = (state) => state.terimajocabang.error;
const getIsEditDataDetailJO = (state) => state.terimajocabang.isEdit;
const getDataNoInduk = (state) => state.terimajocabang.dataNoInduk;
const getDataNoJO = (state) => state.terimajocabang.detailJO;
const getIsEditJO = (state) => state.terimajocabang.isEditJO;
const getDataJO = (state) => state.terimajocabang.feedback;
const getAllCAbang = (state) => state.terimajocabang.cabang;
const getDataTukang = (state) => state.terimajocabang.tukang;

const data = {
  getDataDetailJO,
  getErrorDataDetailJO,
  getIsEditDataDetailJO,
  getDataNoInduk,
  getDataNoJO,
  getIsEditJO,
  getDataJO,
  getAllCAbang,
  getDataTukang,
};
export default data;
