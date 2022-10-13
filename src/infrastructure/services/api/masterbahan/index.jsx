import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterBahan = {
  getAllMasterBahan: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_BAHAN });
    return response;
  },
  getMasterBahanById: async (id) => {
    const response = await get({ url: word.URL_GET_MASTER_BAHAN_BY_ID + id });
    return response;
  },
  addMasterBahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_BAHAN,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterBahan: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_BAHAN + data);
    return response;
  },
  editMasterBahan: async (id, data) => {
    const response = await put(word.URL_UPDATE_MASTER_BAHAN + id, data);
    return response;
  },
};

export default MasterBahan;
