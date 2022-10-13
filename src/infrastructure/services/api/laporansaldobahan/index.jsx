import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanSaldoBahan = {
  getAllLaporanSaldoBahan: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_SALDO_BAHAN +
        `group=${dataKirim.kelompok}&startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanSaldoBahan;
