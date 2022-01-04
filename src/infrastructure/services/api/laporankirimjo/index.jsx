import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanKirimJO = {
  getAllLaporanKirimJO: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_KIRIM_JO,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanKirimJO;
