import post from "../../../axios/post";
import word from "../../../shared/static";

const LaporanOutstand = {
  getAllLaporanOutstand: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_OUTSTAND,
      data: dataKirim,
    });
    return response;
  },
};

export default LaporanOutstand;
