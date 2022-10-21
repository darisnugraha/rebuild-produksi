const getDataDetailJO = (state) => state.kirimjo.dataDetailJO;
const getErrorDataDetailJO = (state) => state.kirimjo.error;
const getIsEditDataDetailJO = (state) => state.kirimjo.isEdit;
const getDataNoInduk = (state) => state.kirimjo.dataNoInduk;
const getDataNoJO = (state) => state.kirimjo.detailJO;
const getIsEditJO = (state) => state.kirimjo.isEditJO;
const getIsEditBatu = (state) => state.kirimjo.isEditBatu;
const getIsEditTambahan = (state) => state.kirimjo.isEditTambahan;
const getDataTukang = (state) => state.kirimjo.dataTukang;
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
};
export default data;
