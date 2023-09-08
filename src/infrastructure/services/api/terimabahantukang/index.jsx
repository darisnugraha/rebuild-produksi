import get from "../../../axios/get";
import post from "../../../axios/post";
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
      url: word.URL_GET_STAFF_BY_DIVISI_NEW + dataKirim,
    });
    return response;
  },
  getBahanByStaff: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_BAHAN_ADMIN_BAHAN +
        `divisi_asal=${dataKirim.divisi}&divisi_tujuan=ADMIN%20BAHAN&tukang_asal=${dataKirim.staff}`,
    });
    return response;
  },
  getBahanTukangAsal: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_BAHAN_KIRIM_NEW +
        `divisi_asal=${dataKirim.divisi}&divisi_tujuan=ADMIN%20BAHAN&tukang_asal=${dataKirim.staff}&tukang_tujuan=ADMIN BAHAN&nama_bahan=${dataKirim.namaBahan}`,
    });
    return response;
  },
  getSaldoKirimBahanTukangOpen: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_SALDO_KIRIM_BAHAN_TUKANG_OPEN +
        `divisi_asal=${dataKirim.divisi}&divisi_tujuan=${dataKirim.divisi_tujuan}&tukang_asal=${dataKirim.staff}&nama_bahan=${dataKirim.nama_bahan}`,
    });
    return response;
  },
  getSaldoKirimBahanTukangOpenNew: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_SALDO_KIRIM_BAHAN_TUKANG_OPEN_NEW + `_id=${dataKirim.id}`,
    });
    return response;
  },
  addTerimaBahanTukang: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_BAHAN_TUKANG,
      data: dataKirim,
    });
    return response;
  },
};

export default TerimaBahanTukang;
