import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterMarketing = {
  getAllMasterMarketing: async () => {
	const response = await get({url : word.URL_GET_ALL_MASTER_MARKETING});
	return response;
  },
  addMasterMarketing: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_MASTER_MARKETING, data);
	return response;
  },
  deleteMasterMarketing: async (data) => {
	const response = await deleteAxios(
	  word.URL_DELETE_MASTER_MARKETING + data
	);
	return response;
  },
  editMasterMarketing: async (url, data) => {
	const response = await put(word.URL_UPDATE_MASTER_MARKETING + url, data);
	return response;
  },
};

export default MasterMarketing;