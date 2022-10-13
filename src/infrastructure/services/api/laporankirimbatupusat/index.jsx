import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanKirimBatuPusat = {
  getAllLaporanKirimBatuPusat: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_KIRIM_BATU_PUSAT +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanKirimBatuPusat;
