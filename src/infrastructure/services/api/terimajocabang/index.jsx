import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaJOCabang = {
  getDetailTerimaJO: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_DETAIL_JO +
        dataKirim.no_job_order +
        "/" +
        dataKirim.nama_divisi.toUpperCase(),
    });
    return response;
  },
  getNoIndukJO: async () => {
    const response = await get({ url: word.URL_GET_NO_INDUK_JO });
    return response;
  },
  getJobOrderDetail: async (data) => {
    const response = await get({
      url:
        word.URL_GET_JO_BY_NO_INDUK_TERIMA + `/${data.no_induk}/${data.divisi}`,
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

export default TerimaJOCabang;
