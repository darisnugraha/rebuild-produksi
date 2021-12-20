import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const AbuTukangPotong = {
  getSetorOutstandPotong: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_SETOR_OUTSTAND_POTONG,
      data: dataKirim,
    });
    return response;
  },
  getAllAbuTukangPotong: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  addAbuTukangPotong: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteAbuTukangPotong: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editAbuTukangPotong: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default AbuTukangPotong;
