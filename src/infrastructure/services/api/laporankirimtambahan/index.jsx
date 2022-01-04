import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanKirimTambahan = {
  getAllLaporanKirimTambahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_KIRIM_TAMBAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanKirimTambahan;
