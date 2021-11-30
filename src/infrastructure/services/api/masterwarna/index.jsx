import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterWarna = {
  getAllMasterWarna: async () => {
	const response = await get({url : word.URL_GET_ALL_MASTER_WARNA});
	return response;
  },
  addMasterWarna: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_MASTER_WARNA, data);
	return response;
  },
  deleteMasterWarna: async (data) => {
	const response = await deleteAxios(
	  word.URL_DELETE_MASTER_WARNA + data
	);
	return response;
  },
  editMasterWarna: async (url, data) => {
	const response = await put(word.URL_UPDATE_MASTER_WARNA + url, data);
	return response;
  },
};

export default MasterWarna;