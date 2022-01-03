import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanPembuatanJenisBahan = {
  getAllLaporanPembuatanJenisBahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_PEMBUATAN_JENIS_BAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanPembuatanJenisBahan;
