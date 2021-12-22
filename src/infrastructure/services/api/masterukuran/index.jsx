import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterUkuran = {
  getAllMasterUkuran: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_UKURAN });
    return response;
  },
  addMasterUkuran: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_UKURAN,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterUkuran: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_UKURAN, data);
    return response;
  },
  editMasterUkuran: async (data) => {
    const response = await put(word.URL_UPDATE_MASTER_UKURAN, data);
    return response;
  },
};

export default MasterUkuran;
