import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimJO = {
  getAllJO: async () => {
    const response = await get({
      url: word.URL_GET_JO_ALL,
    });
    return response;
  },
  getDetailJO: async (noJO, divisi) => {
    const response = await get({
      url: word.URL_GET_DETAIL_TAMBAH_JO + noJO + "/" + divisi,
    });
    return response;
  },
  getTukangByDivisi: async (data) => {
    const response = await get({ url: word.URL_GET_TUKANG_DIVISI + data });
    return response;
  },
  getNoIndulJO: async () => {
    const response = await get({ url: word.URL_GET_NO_INDUK_JO });
    return response;
  },
  getJobOrderDetail: async (data) => {
    const response = await get({
      url: word.URL_GET_JO_BY_NO_INDUK + `/${data.no_induk}/${data.divisi}`,
    });
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
  getAllCabang: async () => {
    const response = await get({
      url: word.URL_GET_ALL_CABANG,
    });
    return response;
  },
};

export default KirimJO;
