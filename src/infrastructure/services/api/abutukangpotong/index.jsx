import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const AbuTukangPotong = {
  getSetorOutstandPotong: async () => {
    const response = await get({ url: word.URL_GET_SETOR_OUTSTAND_POTONG });
    return response;
  },
  getAllAbuTukangPotong: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  addAbuTukangPotong: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_POST_SETOR_OUTSTAND_POTONG,
      data: dataKirim,
    });
    return response;
  },
};

export default AbuTukangPotong;
