import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const PembuatanJenisBahan = {
  getAllSaldoBahanStock: async () => {
	const response = await get({url : word.URL_GET_ALL_SALDO_BAHAN_STOCK});
	return response;
  },
  getAllPembuatanJenisBahan: async () => {
	const response = await get({url : word.URL_GET_ALL_PEMBUATAN_JENIS_BAHAN});
	return response;
  },
  addPembuatanJenisBahan: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_PEMBUATAN_JENIS_BAHAN, data);
	return response;
  },
  deletePembuatanJenisBahan: async (data) => {
	const response = await deleteAxios(
	  word.URL_DELETE_PEMBUATAN_JENIS_BAHAN + data
	);
	return response;
  },
  editPembuatanJenisBahan: async (url, data) => {
	const response = await put(word.URL_UPDATE_PEMBUATAN_JENIS_BAHAN + url, data);
	return response;
  },
};

export default PembuatanJenisBahan;