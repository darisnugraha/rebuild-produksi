import post from "../../../axios/post";
import get from "../../../axios/get";
import word from "../../../shared/static";

const CloseJO = {
  getDetailCloseJO: async (dataKirim) => {
    const response = await get({
      url: word.URL_GET_DETAIL_JO_CLOSE + dataKirim,
    });
    return response;
  },
  getNoIndukJO: async () => {
    const response = await get({ url: word.URL_GET_NO_INDUK_JO });
    return response;
  },
  getJobOrderDetail: async (data) => {
    const response = await get({
      url: word.URL_GET_JO_BY_NO_INDUK_CLOSE + `/${data.no_induk}`,
    });
    return response;
  },
  addCloseJOCheckout: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_CLOSE_JO,
      data: dataKirim,
    });
    return response;
  },
};

export default CloseJO;
