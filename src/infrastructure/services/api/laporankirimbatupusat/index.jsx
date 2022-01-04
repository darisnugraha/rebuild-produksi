import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanKirimBatuPusat = {
  getAllLaporanKirimBatuPusat: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_KIRIM_BATU_PUSAT,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanKirimBatuPusat;
