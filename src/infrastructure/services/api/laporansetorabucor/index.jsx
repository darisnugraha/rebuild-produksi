import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanSetorAbuCOR = {
  getAllLaporanSetorAbuCOR: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_SETOR_ABU_COR +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanSetorAbuCOR;
