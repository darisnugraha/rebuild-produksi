import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const KirimLebur = {
  getAllHistoryKirimLebur: async () => {
    const response = await get({ url: word.URL_GET_HISTORY_KIRIM_LEBUR });
    return response;
  },
  getAllSaldoBahanOpen: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_ALL_SALDO_BAHAN_OPEN,
      data: dataKirim,
    });
    return response;
  },
  getAllSaldoBahan: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_ALL_SALDO_BAHAN,
      data: dataKirim,
    });
    return response;
  },
  deleteKirimLebur: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editKirimLebur: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default KirimLebur;
