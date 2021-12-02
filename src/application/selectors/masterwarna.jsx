const getAllMasterWarna = (state) => state.masterwarna.feedback;
const getErrorMasterWarna = (state) => state.masterwarna.error;
const getIsEditMasterWarna = (state) => state.masterwarna.isEdit;
const getIsVisibleMasterWarna = (state) => state.masterwarna.isVisible;
const getDataEditMasterWarna = (state) => state.masterwarna.dataEdit;
const data = {
  getAllMasterWarna,
  getErrorMasterWarna,
  getIsEditMasterWarna,
  getIsVisibleMasterWarna,
  getDataEditMasterWarna,
};
export default data;
