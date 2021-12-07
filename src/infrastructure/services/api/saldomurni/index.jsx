import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const SaldoMurni = {
  getAllSaldoMurni: async () => {
    const response = await get({ url: word.URL_GET_ALL_SALDO_MURNI });
    return response;
  },
  addSaldoMurni: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_SALDO_MURNI, data);
    return response;
  },
  deleteSaldoMurni: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_SALDO_MURNI + data);
    return response;
  },
  editSaldoMurni: async (url, data) => {
    const response = await put(word.URL_UPDATE_SALDO_MURNI + url, data);
    return response;
  },
};

export default SaldoMurni;
