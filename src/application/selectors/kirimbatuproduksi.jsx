const getDataKirimBatuProduksi= (state) => state.kirimbatuproduksi.dataKirim;
const getErrorKirimBatuProduksi= (state) => state.kirimbatuproduksi.errorKirim;
const getIsEditKirimBatuProduksi= (state) => state.kirimbatuproduksi.isEdit;
const getIsVisibleKirimBatuProduksi= (state) => state.kirimbatuproduksi.isVisible;
const data = {
  getDataKirimBatuProduksi,
  getErrorKirimBatuProduksi,
  getIsEditKirimBatuProduksi,
  getIsVisibleKirimBatuProduksi
};
export default data;
