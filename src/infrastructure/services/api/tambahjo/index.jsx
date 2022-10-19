import post from "../../../axios/post";
import get from "../../../axios/get";
import word from "../../../shared/static";

const TambahJobOrder = {
  addTambahJobOrderCart: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_JOB_ORDER_CART,
      data: dataKirim,
    });
    return response;
  },
  addTambahJobOrderCheckOut: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_JOB_ORDER_CHECKOUT,
      data: dataKirim,
    });
    return response;
  },
  getDataPohon: async (dataKirim) => {
    const response = await get({
      url: word.URL_GET_DATA_POHON + dataKirim,
    });
    return response;
  },
};

export default TambahJobOrder;
