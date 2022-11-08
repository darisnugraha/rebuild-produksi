import post from "../../../axios/post";
import word from "../../../shared/static";
import get from "../../../axios/get";

const TambahAmbilBatu = {
  getSaldoBatuAPI: async () => {
    const response = await get({ url: word.URL_GET_SALDO_BATU });
    return response;
  },
  getDataBatuByKode: async (datakirim) => {
    const response = await get({ url: word.URL_GET_BATU_BY_KODE + datakirim });
    return response;
  },
  addTambahAmbilBatu: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_MUTASI_BATU,
      data: dataKirim,
    });
    return response;
  },
};

export default TambahAmbilBatu;
