import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterJenis = {
  getAllMasterJenis: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_JENIS });
    return response;
  },
  addMasterJenis: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_JENIS,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterJenis: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_JENIS, data);
    return response;
  },
  editMasterJenis: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_JENIS, data);
    return response;
  },
};

export default MasterJenis;
