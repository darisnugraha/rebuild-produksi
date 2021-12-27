import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaMasak = {
  getTerimaMasak: async ({ data }) => {
    const response = await get({ url: word.URL_GET_KIRIM_MASAK + data });
    return response;
  },
  addTerimaMasak: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_MASAK,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaMasak;
