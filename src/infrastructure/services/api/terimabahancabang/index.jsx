import get from "../../../axios/get";
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
};

export default TerimaBahanCabang;
