import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterStatus = {
  getAllMasterStatus: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_STATUS });
    return response;
  },
  getMasterStatusById: async (id) => {
    const response = await get({ url: word.URL_GET_MASTER_STATUS_BY_ID + id });
    return response;
  },
  addMasterStatus: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_STATUS,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterStatus: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_STATUS + data);
    return response;
  },
  editMasterStatus: async (id, data) => {
    const response = await put(word.URL_UPDATE_MASTER_STATUS + id, data);
    return response;
  },
};

export default MasterStatus;
