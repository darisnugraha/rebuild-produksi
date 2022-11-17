const getAllMasterTukang = (state) => state.mastertukang.feedback;
const getErrorMasterTukang = (state) => state.mastertukang.error;
const getIsEditMasterTukang = (state) => state.mastertukang.isEdit;
const getIsVisibleMasterTukang = (state) => state.mastertukang.isVisible;
const getDataEditMasterTukang = (state) => state.mastertukang.dataEdit;
const getAllMasterTukangByDivisi = (state) =>
  state.mastertukang.dataTukangbyDivisi;
const data = {
  getAllMasterTukang,
  getErrorMasterTukang,
  getIsEditMasterTukang,
  getIsVisibleMasterTukang,
  getDataEditMasterTukang,
  getAllMasterTukangByDivisi,
};
export default data;
