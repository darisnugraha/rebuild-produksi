const getAllMasterUkuran = (state) => state.masterukuran.feedback;
const getErrorMasterUkuran = (state) => state.masterukuran.error;
const getIsEditMasterUkuran = (state) => state.masterukuran.isEdit;
const getIsVisibleMasterUkuran = (state) => state.masterukuran.isVisible;
const getDataEditMasterUkuran = (state) => state.masterukuran.dataEdit;
const data = {
  getAllMasterUkuran,
  getErrorMasterUkuran,
  getIsEditMasterUkuran,
  getIsVisibleMasterUkuran,
  getDataEditMasterUkuran,
};
export default data;
