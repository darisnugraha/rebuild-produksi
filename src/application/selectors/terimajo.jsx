const getDataDetailJO = (state) => state.terimajo.detailJO;
const getErrorDataDetailJO = (state) => state.terimajo.error;
const getIsEditDataDetailJO = (state) => state.terimajo.isEdit;
const getDataNoInduk = (state) => state.terimajo.dataNoInduk;
const getDataNoJO = (state) => state.terimajo.detailJO;
const getIsEditJO = (state) => state.terimajo.isEditJO;
const getDataJO = (state) => state.terimajo.feedback;

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
