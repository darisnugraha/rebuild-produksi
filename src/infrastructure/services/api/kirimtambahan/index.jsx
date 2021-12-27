import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimTambahan = {
  getAllAsalStockBahan: async () => {
    const response = await get({ url: word.URL_GET_ASAL_STOCK_BAHAN });
    return response;
  },
  getCartKirimTambahan: async (data) => {
    const response = await get({
      url: word.URL_GET_CART_KIRIM_TAMBAHAN + data,
    });
    return response;
  },
  getStockBahanAdmin: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_STOCK_BAHAN_ADMIN,
      data: dataKirim,
    });
    return response;
  },
  addKirimTambahanCart: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MASTER_ORIGINAL,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimTambahan;
