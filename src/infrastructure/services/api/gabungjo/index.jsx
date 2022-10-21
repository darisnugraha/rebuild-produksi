import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const GabungJO = {
  getDetailJOGabung: async (data) => {
    const response = await get({ url: word.URL_GET_DATA_JO_GABUNG_JO + data });
    return response;
  },
  getNOJobOrder: async (data) => {
    const response = await get({ url: word.URL_GET_DATA_JO + data });
    return response;
  },
  addGabungJO: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_GABUNG_JO,
      data: dataKirim,
    });
    return response;
  },
};

export default GabungJO;
