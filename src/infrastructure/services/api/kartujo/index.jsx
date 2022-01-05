import post from "../../../axios/post";
import word from "../../../shared/static";

const KartuJobOrder = {
  getAllKartuJobOrder: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_KARTU_JO,
      data: dataKirim,
    });
    return response;
  },
};

export default KartuJobOrder;
