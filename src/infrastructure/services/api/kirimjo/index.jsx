import get from "../../../axios/get";
import post from "../../../axios/post";
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
  addKirimJOCart: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_JOB_ORDER_CART,
      data: dataKirim,
    });
    return response;
  },
  addKirimJOCheckOut: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_JOB_ORDER_CHECKOUT,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimJO;
