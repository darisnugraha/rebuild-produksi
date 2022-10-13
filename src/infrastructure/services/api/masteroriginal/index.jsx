import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterOriginal = {
  getAllMasterOriginal: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  getMasterOriginalById: async (id) => {
    const response = await get({
      url: word.URL_GET_MASTER_ORIGINAL_BY_ID + id,
    });
    return response;
  },
  addMasterOriginal: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_ORIGINAL,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterOriginal: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editMasterOriginal: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default MasterOriginal;
