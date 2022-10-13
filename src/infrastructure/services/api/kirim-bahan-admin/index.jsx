import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimBahanAdmin = {
  getAllDivisi: async () => {
    const response = await get({ url: word.URL_GET_ALL_DIVISI });
    return response;
  },
  getTukangDivisi: async (divisi) => {
    const response = await get({ url: word.URL_GET_TUKANG_DIVISI + divisi });
    return response;
  },
  addKirimBahanAdmin: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_BAHAN_ADMIN_BAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimBahanAdmin;
