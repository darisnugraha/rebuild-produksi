import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanTerimaBatu = {
  getAllLaporanTerimaBatu: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_BATU +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanTerimaBatu;
