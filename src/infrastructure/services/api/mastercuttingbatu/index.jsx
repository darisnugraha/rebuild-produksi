import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterCuttingBatu = {
  getAllMasterCuttingBatu: async () => {
	const response = await get({url : word.URL_GET_ALL_MASTER_CUTTING_BATU});
	return response;
  },
  addMasterCuttingBatu: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_MASTER_CUTTING_BATU, data);
	return response;
  },
  deleteMasterCuttingBatu: async (data) => {
	const response = await deleteAxios(
	  word.URL_DELETE_MASTER_CUTTING_BATU + data
	);
	return response;
  },
  editMasterCuttingBatu: async (url, data) => {
	const response = await put(word.URL_UPDATE_MASTER_CUTTING_BATU + url, data);
	return response;
  },
};

export default MasterCuttingBatu;