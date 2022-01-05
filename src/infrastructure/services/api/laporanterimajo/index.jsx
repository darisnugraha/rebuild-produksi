import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanTerimaJO = {
  getAllLaporanTerimaJO: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_TERIMA_JO,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanTerimaJO;
