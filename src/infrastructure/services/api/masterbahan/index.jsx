import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterBahan = {
  getAllMasterBahan: async () => {
	const response = await get({url : word.URL_GET_ALL_MASTER_BAHAN});
	return response;
  },
  addMasterBahan: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_MASTER_BAHAN, data);
	return response;
  },
  deleteMasterBahan: async (data) => {
	const response = await deleteAxios(
	  word.URL_DELETE_MASTER_BAHAN + data
	);
	return response;
  },
  editMasterBahan: async (url, data) => {
	const response = await put(word.URL_UPDATE_MASTER_BAHAN + url, data);
	return response;
  },
};

export default MasterBahan;