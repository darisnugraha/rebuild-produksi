import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterDivisi = {
  getAllMasterDivisi: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_DIVISI });
    return response;
  },
  addMasterDivisi: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_DIVISI,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterDivisi: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_DIVISI, data);
    return response;
  },
  editMasterDivisi: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_DIVISI, data);
    return response;
  },
};

export default MasterDivisi;
