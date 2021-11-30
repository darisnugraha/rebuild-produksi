import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterJenisBahan = {
  getAllMasterJenisBahan: async () => {
	const response = await get({url : word.URL_GET_ALL_MASTER_JENIS_BAHAN});
	return response;
  },
  addMasterJenisBahan: async (data) => {
	const response = await post.AxiosPost(word.URL_ADD_MASTER_JENIS_BAHAN, data);
	return response;
  },
  deleteMasterJenisBahan: async (data) => {
	const response = await deleteAxios(
	  word.URL_DELETE_MASTER_JENIS_BAHAN + data
	);
	return response;
  },
  editMasterJenisBahan: async (url, data) => {
	const response = await put(word.URL_UPDATE_MASTER_JENIS_BAHAN + url, data);
	return response;
  },
};

export default MasterJenisBahan;