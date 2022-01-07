import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanSaldoBahanPusat = {
  getAllLaporanSaldoBahanPusat: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_SALDO_BAHAN_PUSAT,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanSaldoBahanPusat;
