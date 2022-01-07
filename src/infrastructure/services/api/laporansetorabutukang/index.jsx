import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanSetorAbuTukang = {
  getAllLaporanSetorAbuTukang: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_SETOR_ABU_TUKANG,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanSetorAbuTukang;
