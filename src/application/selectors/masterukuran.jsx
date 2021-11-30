const getAllMasterUkuran = (state) => state.masterukuran.feedback;
const getErrorMasterUkuran = (state) => state.masterukuran.error;
const getIsEditMasterUkuran = (state) => state.masterukuran.isEdit;
const data = {
  getAllMasterUkuran,
  getErrorMasterUkuran,
  getIsEditMasterUkuran,
};
export default data;
