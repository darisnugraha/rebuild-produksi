import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const KirimBahanAdminPusat = {
  getAllStockBahanDivisi: async () => {
    const response = await get({ url: word.URL_GET_STOCK_BAHAN_DIVISI });
    return response;
  },
  getStaffStockBahanDivisi: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_STOCK_BAHAN_STAFF_DIVISI,
      data: dataKirim,
    });
    return response;
  },
  getStockBahanByStaff: async ({ dataKirim }) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_STOCK_BAHAN_BY_STAFF,
      data: dataKirim,
    });
    return response;
  },
  getAllKirimBahanAdminPusat: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_ORIGINAL });
    return response;
  },
  addKirimBahanAdminPusat: async (data) => {
    const response = await post.AxiosPost(word.URL_ADD_MASTER_ORIGINAL, data);
    return response;
  },
  deleteKirimBahanAdminPusat: async (data) => {
    const response = await deleteAxios(word.URL_DELETE_MASTER_ORIGINAL + data);
    return response;
  },
  editKirimBahanAdminPusat: async (url, data) => {
    const response = await put(word.URL_UPDATE_MASTER_ORIGINAL + url, data);
    return response;
  },
};

export default KirimBahanAdminPusat;
