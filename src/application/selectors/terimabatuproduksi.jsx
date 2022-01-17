const getAllTerimaBatuProduksi = (state) => state.terimabatuproduksi.feedback;
const getErrorTerimaBatuProduksi = (state) => state.terimabatuproduksi.error;
const getIsEditTerimaBatuProduksi = (state) => state.terimabatuproduksi.isEdit;
const data = {
  getAllTerimaBatuProduksi,
  getErrorTerimaBatuProduksi,
  getIsEditTerimaBatuProduksi,
};
export default data;
