const getAllSaldoMurni = (state) => state.saldomurni.feedback;
const getErrorSaldoMurni = (state) => state.saldomurni.error;
const getIsEditSaldoMurni = (state) => state.saldomurni.isEdit;
const getIsAddSaldoMurni = (state) => state.saldomurni.isAdd;
const getIsTakeSaldoMurni = (state) => state.saldomurni.isTake;
const getIsVisibleSaldoMurni = (state) => state.saldomurni.isVisible;
const data = {
  getAllSaldoMurni,
  getErrorSaldoMurni,
  getIsEditSaldoMurni,
  getIsAddSaldoMurni,
  getIsTakeSaldoMurni,
  getIsVisibleSaldoMurni,
};
export default data;
