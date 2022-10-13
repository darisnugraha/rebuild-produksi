import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanKirimJO = {
  getAllLaporanKirimJO: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_KIRIM_JO_PUSAT +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}&kode_tukang=${dataKirim.staff}`,
    });
    return response;
  },
};

export default LaporanKirimJO;
