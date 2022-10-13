import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanSetorAbuTukang = {
  getAllLaporanSetorAbuTukang: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_SETOR_ABU_TUKANG +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanSetorAbuTukang;
