import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const KirimBahanAdmin = {
  getAllDivisi: async () => {
	const response = await get({url : word.URL_GET_ALL_DIVISI});
	return response;
  },
  getAllKirimBahanAdmin: async () => {
	const response = await get({url : "word.URL_GET_ALL_MASTER_ORIGINAL"});
	return response;
  },
  addKirimBahanAdmin: async (data) => {
	const response = await post.AxiosPost("word.URL_ADD_MASTER_ORIGINAL", data);
	return response;
  },
  deleteKirimBahanAdmin: async (data) => {
	const response = await deleteAxios(
	  "word.URL_DELETE_MASTER_ORIGINAL" + data
	);
	return response;
  },
  editKirimBahanAdmin: async (url, data) => {
	const response = await put("word.URL_UPDATE_MASTER_ORIGINAL" + url, data);
	return response;
  },
};

export default KirimBahanAdmin;