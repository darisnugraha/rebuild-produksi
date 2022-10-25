import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const AbuTukang = {
  getSetorAbuTukang: async ({ dataKirim }) => {
    const response = await get({
      url: word.URL_GET_ABU_TUKANG + `${dataKirim.divisi}/${dataKirim.staff}`,
    });
    return response;
  },
  getAllAbuTukang: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  getDivisiTukangSusut: async () => {
    const response = await get({ url: word.URL_GET_DIVISI_SUSUT_TUKANG });
    return response;
  },
  getTukangByDivisi: async (data) => {
    const response = await get({
      url: word.URL_GET_TUKANG_DIVISI + data,
    });
    return response;
  },
  addAbuTukang: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_POST_ABU_TUKANG,
      data: dataKirim,
    });
    return response;
  },
};

export default AbuTukang;
