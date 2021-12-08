const getAllSaldoBahanStock = (state) => state.pembuatanjenisbahan.feedback;
const getErrorPembuatanJenisBahan = (state) => state.pembuatanjenisbahan.error;
const getIsEditPembuatanJenisBahan = (state) =>
  state.pembuatanjenisbahan.isEdit;
const data = {
  getAllSaldoBahanStock,
  getErrorPembuatanJenisBahan,
  getIsEditPembuatanJenisBahan,
};
export default data;
