import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterUser = {
  getAllMasterUser: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_USER });
    return response;
  },
  addMasterUser: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_USER,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterUser: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_USER, data);
    return response;
  },
  editMasterUser: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_USER, data);
    return response;
  },
};

export default MasterUser;
