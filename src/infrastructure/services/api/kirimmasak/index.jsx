import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimMasak = {
  getAllHistoryKirimMasak: async () => {
    const response = await get({ url: word.URL_GET_HISTORY_KIRIM_MASAK });
    return response;
  },
  getDataTerimaLebur: async ({ data }) => {
    const response = await get({ url: word.URL_GET_DATA_TERIMA_LEBUR + data });
    return response;
  },
  addKirimMasak: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_MASAK,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimMasak;
