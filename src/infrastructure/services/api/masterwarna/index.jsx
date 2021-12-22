import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterWarna = {
  getAllMasterWarna: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_WARNA });
    return response;
  },
  addMasterWarna: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_WARNA,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterWarna: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_WARNA, data);
    return response;
  },
  editMasterWarna: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_WARNA, data);
    return response;
  },
};

export default MasterWarna;
