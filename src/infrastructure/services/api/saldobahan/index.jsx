import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";
const saldobahan = {
  getAllSaldobahan: async () => {
	const response = await get.AxiosGet(word.URL_GET_ALL_SALDO_BAHAN);
	return response;
  },
  addSaldobahan: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_SALDO_BAHAN, data);
	return response;
  },
  deleteSaldobahan: async (data) => {
	const response = await deleteAxios.AxiosDelete(
	  word.URL_DELETE_SALDO_BAHAN + data
	);
	return response;
  },
  editSaldobahan: async (url, data) => {
	const response = await put.AxiosPut(word.URL_UPDATE_SALDO_BAHAN + url, data);
	return response;
  },
};

export default saldobahan;