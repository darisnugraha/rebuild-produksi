import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanSaldoBahan = {
  getAllLaporanSaldoBahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_SALDO_BAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanSaldoBahan;
