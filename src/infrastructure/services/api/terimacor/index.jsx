import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaCOR = {
  getDetailPohon: async (data) => {
    const response = await get({ url: word.URL_GET_DETAIL_POHON + data });
    return response;
  },
  addTerimaCOR: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_COR,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaCOR;
