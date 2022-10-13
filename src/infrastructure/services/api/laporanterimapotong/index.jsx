import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanTerimaPotong = {
  getAllLaporanTerimaPotong: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_POTONG +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}&no_pohon=${dataKirim.no_pohon}`,
    });
    return response;
  },
};

export default LaporanTerimaPotong;
