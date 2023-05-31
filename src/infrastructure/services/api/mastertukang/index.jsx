import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const MasterTukang = {
  getAllMasterTukang: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_TUKANG });
    return response;
  },
  getMasterTukangById: async (id) => {
    const response = await get({ url: word.URL_GET_MASTER_TUKANG_BY_ID + id });
    return response;
  },
  getAllMasterTukangByDivisi: async (divisi) => {
    const response = await get({
      url: word.URL_GET_TUKANG_DIVISI + divisi,
    });
    return response;
  },
  addMasterTukang: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_TUKANG,
      data: dataKirim,
    });
    return response;
  },
  deleteMasterTukang: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_TUKANG, data);
    return response;
  },
  editMasterTukang: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_TUKANG + url, data);
    return response;
  },
};

export default MasterTukang;
