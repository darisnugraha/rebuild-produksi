import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const TerimaTukangPotong = {
  getTerimaTukangPotong: async ({ data }) => {
    const response = await get({ url: word.URL_GET_POTONG_POHON + data });
    return response;
  },
  addTerimaTukangPotong: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteTerimaTukangPotong: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editTerimaTukangPotong: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default TerimaTukangPotong;
