import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanKirimBatu = {
  getAllLaporanKirimBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_KIRIM_BATU,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanKirimBatu;
