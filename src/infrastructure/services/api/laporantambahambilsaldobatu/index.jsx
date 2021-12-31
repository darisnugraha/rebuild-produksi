import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanTambahAmbilSaldoBatu = {
  getAllLaporanTambahAmbilSaldoBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_TAMBAH_AMBIL_SALDO_BATU,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanTambahAmbilSaldoBatu;
