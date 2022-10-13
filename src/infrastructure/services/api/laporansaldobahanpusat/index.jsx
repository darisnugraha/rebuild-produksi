import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanSaldoBahanPusat = {
  getAllLaporanSaldoBahanPusat: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_SALDO_BAHAN_PUSAT +
        `divisi=${dataKirim.divisi}&tukang=${dataKirim.staff}&group=${dataKirim.kelompok}&startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
};

export default LaporanSaldoBahanPusat;
