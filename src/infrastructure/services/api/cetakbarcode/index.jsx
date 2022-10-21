import get from "../../../axios/get";
import word from "../../../shared/static";

const CetakBarcode = {
  getNoInduk: async () => {
    const response = await get({ url: word.URL_GET_NO_INDUK_JO });
    return response;
  },
  getNoJO: async (data) => {
    const response = await get({ url: word.URL_GET_DATA_JO + data });
    return response;
  },
  getDetailByNoJO: async (data) => {
    const response = await get({ url: word.URL_GET_NO_JO + data });
    return response;
  },
};

export default CetakBarcode;
