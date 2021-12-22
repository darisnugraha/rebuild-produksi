import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterKondisi = {
  getAllMasterKondisi: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_KONDISI });
    return response;
  },
  addMasterKondisi: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_KONDISI,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterKondisi: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_KONDISI, data);
    return response;
  },
  editMasterKondisi: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_KONDISI, data);
    return response;
  },
};

export default MasterKondisi;
