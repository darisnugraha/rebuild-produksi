import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";
import AxiosGetAuth from "../../../axios/getAuth";

const MasterUser = {
  getAllMasterUser: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_USER });
    return response;
  },
  authorizeUser: async (dataKirim) => {
    const response = await AxiosGetAuth({
      url:
        word.URL_AUTHORIZE_USER +
        `user_id=${dataKirim.user_id}&password=${dataKirim.password}`,
    });
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
    const response = await deleteAxios(word.URL_DELETE_MASTER_USER + data);
    return response;
  },
  editMasterUser: async (data, id) => {
    const response = await put(word.URL_UPDATE_MASTER_USER + id, data);
    return response;
  },
};

export default MasterUser;
