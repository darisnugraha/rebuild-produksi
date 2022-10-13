import get from "../../../axios/get";
import post from "../../../axios/post";
import word from "../../../shared/static";

const TerimaBatuProduksi = {
  addTerimaBatuProduksi: async (dataKirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_TERIMA_BATU_PRODUKSI,
      data: dataKirim,
    });
    return response;
  },
  getAllKirimBatuProduksi: async (dataKirim) => {
    const response = await get({
      url:
        word.URL_GET_DATA_BATU_KIRIM +
        `${dataKirim.no_job_order}/${dataKirim.divisi.toUpperCase()}`,
    });
    return response;
  },
};

export default TerimaBatuProduksi;
