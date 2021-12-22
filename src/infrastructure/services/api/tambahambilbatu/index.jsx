import post from "../../../axios/post";
import word from "../../../shared/static";

const TambahAmbilBatu = {
  addTambahAmbilBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MUTASI_BATU,
      data: dataKirim,
    });
    return response;
  },
};

export default TambahAmbilBatu;
