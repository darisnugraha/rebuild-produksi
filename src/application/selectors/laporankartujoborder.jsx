const getAllKartuJobOrder = (state) => state.laporankartujoborder.feedback;
const getErrorKartuJobOrder = (state) => state.laporankartujoborder.error;
const getIsEditKartuJobOrder = (state) => state.laporankartujoborder.isEdit;
const data = {
  getAllKartuJobOrder,
  getErrorKartuJobOrder,
  getIsEditKartuJobOrder,
};
export default data;
