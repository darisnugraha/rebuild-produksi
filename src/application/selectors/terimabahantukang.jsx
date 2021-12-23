const getAllDivisiAsalSaldoBahan = (state) => state.terimabahantukang.feedback;
const getAllTukangAsal = (state) => state.terimabahantukang.feedbackTukang;
const getAllBahanAsal = (state) => state.terimabahantukang.feedbackBahan;
const getErrorDivisiAsalSaldoBahan = (state) => state.terimabahantukang.error;
const getIsEditDivisiAsalSaldoBahan = (state) => state.terimabahantukang.isEdit;
const data = {
  getAllBahanAsal,
  getAllTukangAsal,
  getAllDivisiAsalSaldoBahan,
  getErrorDivisiAsalSaldoBahan,
  getIsEditDivisiAsalSaldoBahan,
};
export default data;
