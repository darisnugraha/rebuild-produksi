import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanTambahAmbilSaldoBatu = {
  getAllLaporanTambahAmbilSaldoBatu: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TAMBAH_AMBIL_SALDO_BATU +
        `kategori=${dataKirim.kategori}&startDate=${dataKirim.startDate}&endDate=${dataKirim.endDate}`,
    });
    return response;
  },
};

export default LaporanTambahAmbilSaldoBatu;
