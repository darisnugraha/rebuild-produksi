import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanTerimaPotong = {
  getAllLaporanTerimaPotong: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_TERIMA_POTONG,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanTerimaPotong;
