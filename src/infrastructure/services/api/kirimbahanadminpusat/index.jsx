import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const KirimBahanAdminPusat = {
  getAllDivisi: async () => {
    const response = await get({ url: word.URL_GET_ALL_MASTER_DIVISI });
    return response;
  },
  getStaffByDivisi: async (divisi) => {
    const response = await get({
      url: word.URL_GET_STAFF_BY_DIVISI_NEW + divisi.toUpperCase(),
    });
    return response;
  },
  getAllStockBahanDivisi: async () => {
    const response = await get({ url: word.URL_GET_STOCK_BAHAN_DIVISI });
    return response;
  },
  getStaffStockBahanDivisi: async ({ dataKirim }) => {
    const response = await get({
      url:
        word.URL_GET_STOCK_BAHAN_STAFF_DIVISI + dataKirim.divisi.toUpperCase(),
    });
    return response;
  },
  getStockBahanByStaff: async ({ dataKirim }) => {
    const response = await get({
      url: word.URL_GET_STOCK_BAHAN_BY_STAFF + dataKirim.staff,
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
