import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const KirimTambahan = {
  getAllAsalStockBahan: async () => {
    const response = await get({ url: word.URL_GET_ASAL_STOCK_BAHAN });
    return response;
  },
  getStockBahanAdmin: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_STOCK_BAHAN_ADMIN,
      data: dataKirim,
    });
    return response;
  },
  getAllKirimTambahan: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  addKirimTambahan: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteKirimTambahan: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editKirimTambahan: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default KirimTambahan;
