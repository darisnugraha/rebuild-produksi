import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaJO = {
  getDetailTerimaJO: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_DETAIL_JO,
      data: dataKirim,
    });
    return response;
  },
  addTerimaJOCart: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_JOB_ORDER_CART,
      data: dataKirim,
    });
    return response;
  },
  addTerimaJOCheckout: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_JOB_ORDER_CHECKOUT,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaJO;
