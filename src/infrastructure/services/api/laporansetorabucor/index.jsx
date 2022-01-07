import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanSetorAbuCOR = {
  getAllLaporanSetorAbuCOR: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_SETOR_ABU_COR,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanSetorAbuCOR;
