import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const AbuTukangCOR = {
  getSetorOutstandCasting: async () => {
    const response = await get({ url: word.URL_GET_SETOR_OUTSTAND_CASTING });
    return response;
  },
  getAllAbuTukangCOR: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  addAbuTukangCOR: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_POST_SETOR_OUTSTAND_CASTING,
      data: dataKirim,
    });
    return response;
  },
};

export default AbuTukangCOR;
