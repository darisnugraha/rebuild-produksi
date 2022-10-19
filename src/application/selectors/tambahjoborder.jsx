const getAllTambahJobOrder = (state) => state.tambahjoborder.feedback;
const getErrorTambahJobOrder = (state) => state.tambahjoborder.error;
const getIsEditTambahJobOrder = (state) => state.tambahjoborder.isEdit;
const getDataPohon = (state) => state.tambahjoborder.dataPohon;
const data = {
  getAllTambahJobOrder,
  getErrorTambahJobOrder,
  getIsEditTambahJobOrder,
  getDataPohon,
};
export default data;
