const getAllMasterBillOfMaterials = (state) =>
  state.masterbillofmaterials.feedback;
const getErrorMasterBillOfMaterials = (state) =>
  state.masterbillofmaterials.error;
const getIsEditMasterBillOfMaterials = (state) =>
  state.masterbillofmaterials.isEdit;
const getIsEditDetailBahan = (state) =>
  state.masterbillofmaterials.isEditDetailBahan;
const getIsVisibleMasterBillOfMaterials = (state) =>
  state.masterbillofmaterials.isVisible;
const getIsVisibleDetailBahan = (state) =>
  state.masterbillofmaterials.isVisibleDetail;
const getDataEditMasterBillOfMaterials = (state) =>
  state.masterbillofmaterials.dataEdit;
const getDataEditDetailBahan = (state) =>
  state.masterbillofmaterials.dataEditBahan;
const getDataDetailBahan = (state) =>
  state.masterbillofmaterials.dataDetailBahan;
const data = {
  getAllMasterBillOfMaterials,
  getErrorMasterBillOfMaterials,
  getIsEditMasterBillOfMaterials,
  getIsEditDetailBahan,
  getIsVisibleMasterBillOfMaterials,
  getDataEditMasterBillOfMaterials,
  getDataEditDetailBahan,
  getIsVisibleDetailBahan,
  getDataDetailBahan,
};
export default data;
