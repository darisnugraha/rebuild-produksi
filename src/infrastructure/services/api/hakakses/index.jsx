import post from "../../../axios/post";
import get from "../../../axios/get";
import word from "../../../shared/static";

const HakAkses = {
  getHakAkses: async (dataKirim) => {
    const response = await get({
      url: word.URL_GET_MENU_HAK_AKSES_USER + dataKirim,
    });
    return response;
  },
  addHakAkses: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MENU_HAK_AKSES_USER,
      data: dataKirim,
    });
    return response;
  },
};

export default HakAkses;
