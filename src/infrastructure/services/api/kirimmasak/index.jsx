import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const KirimMasak = {
  getAllHistoryKirimMasak: async () => {
    const response = await get({ url: word.URL_GET_HISTORY_KIRIM_MASAK });
    return response;
  },
  getDataTerimaLebur: async ({ data }) => {
    const response = await get({ url: word.URL_GET_DATA_TERIMA_LEBUR + data });
    return response;
  },
  addKirimMasak: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteKirimMasak: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editKirimMasak: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default KirimMasak;
