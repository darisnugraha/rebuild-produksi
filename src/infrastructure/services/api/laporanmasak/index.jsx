import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanMasak = {
  getAllKirimMasak: async (params) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_KIRIM_MASAK +
        params.tgl_awal +
        "&" +
        params.tgl_akhir,
    });
    return response;
  },
  getAllTerimaMasak: async (params) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_MASAK +
        params.tgl_awal +
        "&" +
        params.tgl_akhir,
    });
    return response;
  },
};

export default LaporanMasak;
