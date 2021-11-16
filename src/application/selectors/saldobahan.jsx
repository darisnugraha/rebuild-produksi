const getAllSaldobahan= (state) => state.saldobahan.feedback;
const getErrorSaldobahan= (state) => state.saldobahan.error;
const getIsEditSaldobahan= (state) => state.saldobahan.isEdit;
const data = { getAllSaldobahan, getErrorSaldobahan,getIsEditSaldobahan };
export default data;