import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaTukangPotong = {
  getTerimaTukangPotong: async ({ data }) => {
    const response = await get({ url: word.URL_GET_POTONG_POHON + data });
    return response;
  },
  addTerimaPotong: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_POTONG,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaTukangPotong;
