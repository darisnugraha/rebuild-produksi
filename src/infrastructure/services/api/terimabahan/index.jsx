import get from "../../../axios/get";
import post from "../../../axios/post";
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
  addTerimaBahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_BAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaBahan;
