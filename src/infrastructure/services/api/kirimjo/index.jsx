import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const KirimJO = {
  getDetailJO: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_DETAIL_JO_BY_POST,
      data: dataKirim,
    });
    return response;
  },
  getAllKirimJO: async () => {
    const response = await get({ url: word.URL_ADD_KIRIM_JO });
    return response;
  },
  addKirimJO: async (data) => {
    const response = await post.AxiosPost(word.URL_GET_DETAIL_JO_BY_POST, data);
    return response;
  },
  deleteKirimJO: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_KIRIM_JO + data);
    return response;
  },
  editKirimJO: async (url, data) => {
    const response = await put(word.URL_UPDATE_KIRIM_JO + url, data);
    return response;
  },
};

export default KirimJO;
