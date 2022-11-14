import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanProduksi = {
  getTukangByDivisi: async (divisi) => {
    const response = await get({
      url: word.URL_GET_STAFF_BY_DIVISI_NEW + divisi.toUpperCase(),
    });
    return response;
  },
  getPeriodeByTukang: async (tukang) => {
    const response = await get({
      url: word.URL_GET_PERIODE_BY_TUKANG + tukang,
    });
    return response;
  },
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
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_SUSUT_PRODUKSI,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanProduksi;
