const getAllStockAdmin= (state) => state.StockAdmin.feedback;
const getErrorStockAdmin= (state) => state.StockAdmin.error;
const getIsEditStockAdmin= (state) => state.StockAdmin.isEdit;
const data = { getAllStockAdmin, getErrorStockAdmin,getIsEditStockAdmin };
export default data;