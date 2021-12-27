import get from "../../../axios/get";
import post from "../../../axios/post";
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
  addKirimBahanAdminPusat: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_KIRIM_BAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default KirimBahanAdminPusat;
