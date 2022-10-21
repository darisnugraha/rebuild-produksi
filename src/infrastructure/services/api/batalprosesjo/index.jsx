import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const BatalProsesJO = {
  getDataJOKirim: async (data) => {
    const response = await get({ url: word.URL_GET_JO_BY_NO_KIRIM + data });
    return response;
  },
  getDataJOTerima: async (data) => {
    const response = await get({ url: word.URL_GET_JO_BY_NO_TERIMA + data });
    return response;
  },
  addBatalProsesJO: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_BATAL_PROSES_JO,
      data: dataKirim,
    });
    return response;
  },
  addBatalProsesJOTerima: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_BATAL_PROSES_JO_TERIMA,
      data: dataKirim,
    });
    return response;
  },
};

export default BatalProsesJO;
