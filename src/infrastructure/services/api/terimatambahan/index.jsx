import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaTambahan = {
  getAllTukangTerimaTambahan: async (divisi) => {
    const response = await get({
      url: word.URL_GET_TUKANG_TERIMA_TAMBAHAN + divisi,
    });
    return response;
  },
  getSaldoTambahan: async (divisi) => {
    const response = await get({
      url: word.URL_GET_SALDO_TAMBAHAN + divisi,
    });
    return response;
  },

  getTerimaTambahanByTukang: async ({ dataKirim }) => {
    const response = await get({
      url: word.URL_GET_BAHAN_TERIMA_TAMBAHAN + dataKirim.staff,
    });
    return response;
  },
  getSaldoBahanOpen: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_SALDO_KIRIM_BAHAN_OPEN,
      data: dataKirim,
    });
    return response;
  },
  addTerimaTambahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_TAMBAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaTambahan;
