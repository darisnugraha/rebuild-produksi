import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanLebur = {
  getAllKirimLebur: async (params) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_KIRIM_LEBUR +
        `startDate=${params.tgl_awal}&endDate=${params.tgl_akhir}`,
    });
    return response;
  },
  getAllTerimaLebur: async (params) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_LEBUR +
        `startDate=${params.tgl_awal}&endDate=${params.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanLebur;
