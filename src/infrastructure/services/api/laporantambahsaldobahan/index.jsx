import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanTambahSaldoBahan = {
  getAllLaporanTambahSaldoBahan: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TAMBAH_SALDO_BAHAN +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanTambahSaldoBahan;
