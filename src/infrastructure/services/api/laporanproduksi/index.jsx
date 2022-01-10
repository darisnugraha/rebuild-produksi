import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanProduksi = {
  getTerimaProduksi: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_TERIMA_PRODUKSI,
      data: dataKirim,
    });
    return response;
  },
  getKirimProduksi: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_KIRIM_PRODUKSI,
      data: dataKirim,
    });
    return response;
  },
  getTerimaTambahanProduksi: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_TERIMA_TAMBAHAN_PRODUKSI,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanProduksi;
