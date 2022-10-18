import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const PembuatanJenisBahan = {
  getAllSaldoBahanStock: async () => {
    const response = await get({ url: word.URL_GET_ALL_SALDO_BAHAN_STOCK });
    return response;
  },
  getAllPembuatanJenisBahan: async () => {
    const response = await get({ url: word.URL_GET_ALL_PEMBUATAN_JENIS_BAHAN });
    return response;
  },
  getBillOfMaterials: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_BILL_OF_MATERIALS +
        `kode_jenis_bahan=${dataKirim.kode_jenis_bahan}&berat_dibutuhkan=${dataKirim.berat_dibutuhkan}`,
    });
    return response;
  },
  addPembuatanJenisBahan: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_PEMBUATAN_JENIS_BAHAN,
      data: dataKirim,
    });
    return response;
  },
};

export default PembuatanJenisBahan;
