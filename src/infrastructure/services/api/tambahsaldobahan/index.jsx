import post from "../../../axios/post";
import word from "../../../shared/static";

const TambahSaldoBahan = {
  addTambahAmbilSaldoBahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TAMBAH_SALDO_BAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default TambahSaldoBahan;
