import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimBahanCabang = {
  getAllDivisi: async () => {
    const response = await get({ url: word.URL_GET_ALL_DIVISI });
    return response;
  },
  getTukangDivisi: async (divisi) => {
    const response = await get({ url: word.URL_GET_TUKANG_DIVISI + divisi });
    return response;
  },
  addKirimBahanCabang: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_BAHAN_ADMIN_CABANG,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimBahanCabang;
