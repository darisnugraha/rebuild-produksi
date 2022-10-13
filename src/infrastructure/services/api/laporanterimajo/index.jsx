import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanTerimaJO = {
  getAllLaporanTerimaJO: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_JO_PUSAT +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanTerimaJO;
