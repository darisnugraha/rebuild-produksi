import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterBatu = {
  getAllMasterBatu: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_BATU });
    return response;
  },
  getMasterBatuById: async (id) => {
    const response = await get({ url: word.URL_GET_MASTER_BATU_BY_ID + id });
    return response;
  },
  addMasterBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_BATU,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterBatu: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_BATU + data);
    return response;
  },
  editMasterBatu: async (id, data) => {
    const response = await put(word.URL_UPDATE_MASTER_BATU + id, data);
    return response;
  },
};

export default MasterBatu;
