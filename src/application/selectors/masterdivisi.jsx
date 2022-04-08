const getAllMasterDivisi = (state) => state.masterdivisi.feedback;
const getErrorMasterDivisi = (state) => state.masterdivisi.error;
const getIsEditMasterDivisi = (state) => state.masterdivisi.isEdit;
const getIsVisibleMasterDivisi = (state) => state.masterdivisi.isVisible;
const getDataEditMasterDivisi = (state) => state.masterdivisi.dataEdit;
const data = {
  getAllMasterDivisi,
  getErrorMasterDivisi,
  getIsEditMasterDivisi,
  getIsVisibleMasterDivisi,
  getDataEditMasterDivisi,
};
export default data;
