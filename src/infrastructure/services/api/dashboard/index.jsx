import get from "../../../axios/get";
import word from "../../../shared/static";

const dashboard = {
  getAllDashboard: async () => {
    const response = await get({ url: word.URL_GET_JO_OUTSTAND_ALL });
    return response;
  },
  getAllAbuCastingOutstand: async () => {
    const response = await get({ url: word.URL_GET_OUTSTAND_ABU_CASTING_ALL });
    return response;
  },
  getAllAbuPotong: async () => {
    const response = await get({ url: word.URL_GET_OUTSTAND_ABU_POTONG_ALL });
    return response;
  },
  getAllAbuTukang: async () => {
    const response = await get({ url: word.URL_GET_OUTSTAND_ABU_TUKANG_ALL });
    return response;
  },
  getAllOutstandCasting: async () => {
    const response = await get({ url: word.URL_GET_OUTSTAND_CASTING_ALL });
    return response;
  },
  getAllOutstandBahan: async () => {
    const response = await get({ url: word.URL_GET_OUTSTAND_BAHAN_ALL });
    return response;
  },
};

export default dashboard;
