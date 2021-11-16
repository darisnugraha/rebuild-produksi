import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";
const kirimsaldodivisi = {
  getAllKirimsaldodivisi: async () => {
	const response = await get.AxiosGet(word.URL_GET_ALL_KIRIM_SALDO_DIVISI);
	return response;
  },
  addKirimsaldodivisi: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_KIRIM_SALDO_DIVISI, data);
	return response;
  },
  deleteKirimsaldodivisi: async (data) => {
	const response = await deleteAxios.AxiosDelete(
	  word.URL_DELETE_KIRIM_SALDO_DIVISI + data
	);
	return response;
  },
  editKirimsaldodivisi: async (url, data) => {
	const response = await put.AxiosPut(word.URL_UPDATE_KIRIM_SALDO_DIVISI + url, data);
	return response;
  },
};

export default kirimsaldodivisi;