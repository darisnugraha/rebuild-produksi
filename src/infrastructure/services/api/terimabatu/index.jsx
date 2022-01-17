import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaBatu = {
  getNoKirimBatuByTanggal: async ({ tanggal }) => {
    const response = await get({
      url: word.URL_GET_NO_KIRIM_BATU_BY_TANGGAL + tanggal,
    });
    return response;
  },
  getDataDetailKirimBatu: async ({ noKirimBatu }) => {
    const response = await get({
      url: word.URL_GET_DETAIL_KIRIM_BATU + noKirimBatu,
    });
    return response;
  },
  addTerimaBatuPusat: async ({dataKirim}) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_BATU_PUSAT,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaBatu;
