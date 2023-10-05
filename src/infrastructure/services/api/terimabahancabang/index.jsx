import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaBahanCabang = {
  getAllCabang: async () => {
    const response = await get({
      url: word.URL_GET_ALL_CABANG,
    });
    return response;
  },
  getSaldoKirimBahanCabang: async (url) => {
    const response = await get({
      url: url + word.URL_GET_SALDO_KIRIM_BAHAN_CABANG,
    });
    return response;
  },
  getDetailKirimBahanCabang: async (url, noMutasi) => {
    const response = await get({
      url: url + word.URL_GET_DETAIL_KIRIM_BAHAN_CABANG + noMutasi,
    });
    return response;
  },
  addTerimaBahanCabang: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_BAHAN_CABANG,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaBahanCabang;
