import word from "../../../shared/static";
import get from "../../../axios/get";

const LaporanKirimBatu = {
  getAllLaporanKirimBatu: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_KIRIM_BATU +
        `startDate=${dataKirim.startDate}&endDate=${dataKirim.endDate}`,
    });
    return response;
  },
};

export default LaporanKirimBatu;
