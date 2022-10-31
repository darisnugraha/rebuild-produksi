import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterMarketing = {
  getAllMasterMarketing: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_MARKETING });
    return response;
  },
  getMasterMarketingById: async (id) => {
    const response = await get({
      url: word.URL_GET_MASTER_MARKETING_BY_ID + id,
    });
    return response;
  },
  addMasterMarketing: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_MARKETING,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterMarketing: async (data) => {
    const response = await deleteAxios(
      word.URL_DELETE_MASTER_MARKETING + "/" + data
    );
    return response;
  },
  editMasterMarketing: async (id, data) => {
    const response = await put(word.URL_UPDATE_MASTER_MARKETING + id, data);
    return response;
  },
};

export default MasterMarketing;
