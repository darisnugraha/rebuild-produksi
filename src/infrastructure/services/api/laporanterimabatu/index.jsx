import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanTerimaBatu = {
  getAllLaporanTerimaBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_TERIMA_BATU,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanTerimaBatu;
