import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterBatu = {
  getAllMasterBatu: async () => {
	const response = await get({url : word.URL_GET_ALL_MASTER_BATU});
	return response;
  },
  addMasterBatu: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_MASTER_BATU, data);
	return response;
  },
  deleteMasterBatu: async (data) => {
	const response = await deleteAxios(
	  word.URL_DELETE_MASTER_BATU + data
	);
	return response;
  },
  editMasterBatu: async (url, data) => {
	const response = await put(word.URL_UPDATE_MASTER_BATU + url, data);
	return response;
  },
};

export default MasterBatu;