const getDataDetailJO = (state) => state.terimajocabang.detailJO;
const getErrorDataDetailJO = (state) => state.terimajocabang.error;
const getIsEditDataDetailJO = (state) => state.terimajocabang.isEdit;
const getDataNoInduk = (state) => state.terimajocabang.dataNoInduk;
const getDataNoJO = (state) => state.terimajocabang.detailJO;
const getIsEditJO = (state) => state.terimajocabang.isEditJO;
const getDataJO = (state) => state.terimajocabang.feedback;

const data = {
  getDataDetailJO,
  getErrorDataDetailJO,
  getIsEditDataDetailJO,
  getDataNoInduk,
  getDataNoJO,
  getIsEditJO,
  getDataJO,
};
export default data;
