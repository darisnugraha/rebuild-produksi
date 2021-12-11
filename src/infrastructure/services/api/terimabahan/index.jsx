import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const TerimaBahan = {
  getAllTerimaBahan: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  getTerimaBahanTukang: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_BAHAN_TERIMA_BAHAN,
      data: dataKirim,
    });
    return response;
  },
  getSaldoBahanOpen: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_SALDO_KIRIM_BAHAN_OPEN,
      data: dataKirim,
    });
    return response;
  },
  addTerimaBahan: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteTerimaBahan: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editTerimaBahan: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default TerimaBahan;
