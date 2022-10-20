const getDataDetailJO = (state) => state.closejo.detailJO;
const getErrorDataDetailJO = (state) => state.closejo.error;
const getIsEditDataDetailJO = (state) => state.closejo.isEdit;
const getDataNoInduk = (state) => state.closejo.dataNoInduk;
const getDataNoJO = (state) => state.closejo.detailJO;
const getIsEditJO = (state) => state.closejo.isEditJO;
const getDataJO = (state) => state.closejo.feedback;

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
