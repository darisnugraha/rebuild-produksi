const getAllMasterJenisBatu = (state) => state.masterjenisbatu.feedback;
const getErrorMasterJenisBatu = (state) => state.masterjenisbatu.error;
const getIsEditMasterJenisBatu = (state) => state.masterjenisbatu.isEdit;
const getIsVisibleMasterJenisBatu = (state) => state.masterjenisbatu.isVisible;
const getDataEditMasterJenisBatu = (state) => state.masterjenisbatu.dataEdit;
const data = {
  getAllMasterJenisBatu,
  getErrorMasterJenisBatu,
  getIsEditMasterJenisBatu,
  getIsVisibleMasterJenisBatu,
  getDataEditMasterJenisBatu,
};
export default data;
