import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const TerimaLebur = {
  getTerimaLebur: async ({ data }) => {
    const response = await get({ url: word.URL_GET_TERIMA_LEBUR + data });
    return response;
  },
  addTerimaLebur: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteTerimaLebur: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editTerimaLebur: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default TerimaLebur;
