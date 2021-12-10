import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const TerimaBatu = {
  getNoKirimBatuByTanggal: async ({ tanggal }) => {
    const response = await get({
      url: word.URL_GET_NO_KIRIM_BATU_BY_TANGGAL + tanggal,
    });
    return response;
  },
  getDataDetailKirimBatu: async ({ noKirimBatu }) => {
    const response = await get({
      url: word.URL_GET_DETAIL_KIRIM_BATU + noKirimBatu,
    });
    return response;
  },
  getAllTerimaBatu: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  addTerimaBatu: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteTerimaBatu: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editTerimaBatu: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default TerimaBatu;
