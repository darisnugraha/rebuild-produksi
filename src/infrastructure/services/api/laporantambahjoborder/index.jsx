import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanTambahJobOrder = {
  getAllLaporanTambahJobOrder: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_LAPORAN_TAMBAH_JOB_ORDER,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanTambahJobOrder;
