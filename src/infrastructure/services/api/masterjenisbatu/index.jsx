import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterJenisBatu = {
  getAllMasterJenisBatu: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_JENIS_BATU });
    return response;
  },
  addMasterJenisBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_JENIS_BATU,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterJenisBatu: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_JENIS_BATU, data);
    return response;
  },
  editMasterJenisBatu: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_JENIS_BATU, data);
    return response;
  },
};

export default MasterJenisBatu;
