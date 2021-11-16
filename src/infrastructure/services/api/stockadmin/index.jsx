import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const StockAdmin = {
  getAllStockAdmin: async () => {
	const response = await get.AxiosGet(word.URL_GET_ALL_STOCK_ADMIN);
	return response;
  },
  addStockAdmin: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_STOCK_ADMIN, data);
	return response;
  },
  deleteStockAdmin: async (data) => {
	const response = await deleteAxios.AxiosDelete(
	  word.URL_DELETE_STOCK_ADMIN + data
	);
	return response;
  },
  editStockAdmin: async (url, data) => {
	const response = await put.AxiosPut(word.URL_UPDATE_STOCK_ADMIN + url, data);
	return response;
  },
};

export default StockAdmin;