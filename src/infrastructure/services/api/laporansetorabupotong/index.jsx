import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanSetorAbuPotong = {
  getAllLaporanSetorAbuPotong: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_SETOR_ABU_POTONG,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanSetorAbuPotong;
