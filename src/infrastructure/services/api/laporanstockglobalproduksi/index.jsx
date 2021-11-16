import get from '../../../axios/get';
import post from '../../../axios/post';
import deleteAxios from '../../../axios/delete';
import put from '../../../axios/put';
import word from '../../../shared/static';

const laporanStockGlobalProduksi = {
  getAllLaporanStockGlobalProduksi: async (data) => {
    const response = await get.AxiosGetBody(word.URL_GET_ALL_LAPORAN_STOCK_GLOBAL_PRODUKSI, data);
    return response;
  },
  addLaporanStockGlobalProduksi: async (datakirim) => {
    const response = await post.AxiosPost({
      url: word.URL_ADD_LAPORAN_STOCK_GLOBAL_PRODUKSI,
      data: datakirim,
    });
    return response;
  },
  deleteLaporanStockGlobalProduksi: async (data) => {
    const response = await deleteAxios.AxiosDelete(
      word.URL_DELETE_LAPORAN_STOCK_GLOBAL_PRODUKSI + data,
    );
    return response;
  },
  editLaporanStockGlobalProduksi: async (url, data) => {
    const response = await put.AxiosPut(word.URL_UPDATE_LAPORAN_STOCK_GLOBAL_PRODUKSI + url, data);
    return response;
  },
};

export default laporanStockGlobalProduksi;
