import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaLebur = {
  getTerimaLebur: async ({ data }) => {
    const response = await get({ url: word.URL_GET_TERIMA_LEBUR + data });
    return response;
  },
  addTerimaLebur: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_LEBUR,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaLebur;
