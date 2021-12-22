import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimBatuProduksi = {
  getAllKirimBatuProduksi: async (noJO) => {
    const response = await get({
      url: word.URL_GET_JO_BY_ID_KIRIM_BATU + noJO,
    });
    return response;
  },
  getHistoryKirimBatuProduksi: async (noJO) => {
    const response = await get({
      url: word.URL_GET_HISTORY_KIRIM_BATU + noJO,
    });
    return response;
  },
  addKirimBatuProduksi: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_BATU_PRODUKSI,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimBatuProduksi;
