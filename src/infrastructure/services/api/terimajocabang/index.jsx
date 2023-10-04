import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaJOCabang = {
  getTukangByDivisi: async (data) => {
    const response = await get({ url: word.URL_GET_TUKANG_DIVISI + data });
    return response;
  },
  getDetailTerimaJO: async (url, dataKirim) => {
    const response = await get({
      url: `${url}${word.URL_GET_DETAIL_JO_CABANG}${
        dataKirim.no_job_order
      }/${dataKirim.nama_divisi.toUpperCase()}`,
    });
    return response;
  },
  getNoIndukJO: async (url, kodeToko, kodeTokoAsal) => {
    const response = await get({
      url: `${url}${word.URL_GET_NO_INDUK_JO_TERIMA_CABANG}kode_toko=${kodeTokoAsal}&kode_toko_tujuan=${kodeToko}`,
    });
    return response;
  },
  getJobOrderDetail: async (url, data) => {
    const response = await get({
      url: `${url}${word.URL_GET_JO_BY_NO_INDUK_TERIMA_CABANG}/${data.no_induk}/${data.divisi}`,
    });
    return response;
  },
  addTerimaJOCheckout: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_JOB_ORDER_CHECKOUT_CABANG,
      data: dataKirim,
    });
    return response;
  },
  getAllCabang: async () => {
    const response = await get({
      url: word.URL_GET_ALL_CABANG,
    });
    return response;
  },
};

export default TerimaJOCabang;
