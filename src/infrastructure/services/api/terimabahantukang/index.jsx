import get from "../../../axios/get";
import post from "../../../axios/post";
import deleteAxios from "../../../axios/delete";
import put from "../../../axios/put";
import word from "../../../shared/static";

const TerimaBahanTukang = {
  getAllDivisiAsalSaldoBahan: async () => {
    const response = await get({
      url: word.URL_GET_ALL_DIVISI_ASAL_SALDO_BAHAN,
    });
    return response;
  },
  getStaffByDivisi: async (dataKirim) => {
    const response = await get({
      url: word.URL_GET_STAFF_BY_DIVISI + dataKirim,
    });
    return response;
  },
  getBahanByStaff: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_BAHAN_BY_STAFF +
        `divisi_tujuan=ADMIN%20BAHAN&tukang=${dataKirim.staff}`,
    });
    return response;
  },
  getSaldoKirimBahanTukangOpen: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_GET_SALDO_KIRIM_BAHAN_TUKANG_OPEN,
      data: dataKirim,
    });
    return response;
  },
  getAllTerimaBahanTukang: async () => {
    const response = await get({ url: word.URL_GET_ALL_TERIMA_BAHAN_TUKANG });
    return response;
  },
  addTerimaBahanTukang: async (data) => {
    const response = await post.AxiosPost(
      word.URL_ADD_TERIMA_BAHAN_TUKANG,
      data
    );
    return response;
  },
  deleteTerimaBahanTukang: async (data) => {
    const response = await deleteAxios(
      word.URL_DELETE_TERIMA_BAHAN_TUKANG + data
    );
    return response;
  },
  editTerimaBahanTukang: async (url, data) => {
    const response = await put(word.URL_UPDATE_TERIMA_BAHAN_TUKANG + url, data);
    return response;
  },
};

export default TerimaBahanTukang;
