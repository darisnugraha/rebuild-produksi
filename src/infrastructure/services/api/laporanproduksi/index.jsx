import get from "../../../axios/get";
import word from "../../../shared/static";

const LaporanProduksi = {
  getTerimaProduksi: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_PRODUKSI +
        `divisi=${dataKirim.divisi}&startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
  getKirimProduksi: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_KIRIM_PRODUKSI +
        `divisi=${dataKirim.divisi}&kode_tukang=${dataKirim.staff}&startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}`,
    });
    return response;
  },
  getTerimaTambahanProduksi: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_TAMBAHAN_PRODUKSI +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}&divisi=${dataKirim.nama_divisi}`,
    });
    return response;
  },
  getTerimaBatuProduksi: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_TERIMA_BATU_PRODUKSI +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}&divisi=${dataKirim.nama_divisi}`,
    });
    return response;
  },
  getOutstandProduksi: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_OUTSTAND_PRODUKSI +
        `divisi=${dataKirim.divisi}&kode_tukang=${dataKirim.kode_staff}`,
    });
    return response;
  },
  getSusutProduksi: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_LAPORAN_SUSUT_PRODUKSI +
        `startDate=${dataKirim.tgl_awal}&endDate=${dataKirim.tgl_akhir}&divisi=${dataKirim.divisi}&kode_tukang=${dataKirim.kode_staff}`,
    });
    return response;
  },
};

export default LaporanProduksi;
