import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimBatuPusat = {
  getAllKirimBatuPusat: async ({ noJO }) => {
    const response = await get({
      url: word.URL_GET_JO_KIRIM_BATU_PUSAT + noJO,
    });
    return response;
  },
  getDetailBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_DETAIL_BATU_KIRIM_PUSAT,
      data: dataKirim,
    });
    return response;
  },
  addKirimBatuCart: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_CART_BATU_KIRIM_PUSAT,
      data: dataKirim,
    });
    return response;
  },
  addCheckoutKirimBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_CHECKOUT_BATU_KIRIM_PUSAT,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimBatuPusat;
