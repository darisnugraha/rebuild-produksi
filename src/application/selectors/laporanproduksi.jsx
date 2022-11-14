const getAllTerimaProduksi = (state) => state.laporanproduksi.feedbackTerima;
const getErrorTerimaProduksi = (state) => state.laporanproduksi.errorTerima;
const getAllTerimaTambahanProduksi = (state) =>
  state.laporanproduksi.feedbackTambahan;
const getErrorTerimaTambahanProduksi = (state) =>
  state.laporanproduksi.errorTambahan;
const getAllTerimaBatuProduksi = (state) => state.laporanproduksi.feedbackBatu;
const getErrorTerimaBatuProduksi = (state) => state.laporanproduksi.errorBatu;
const getAllOutstandProduksi = (state) =>
  state.laporanproduksi.feedbackOutstand;
const getAllSusutProduksi = (state) => state.laporanproduksi.feedbackSusut;
const getErrorOutstandProduksi = (state) => state.laporanproduksi.errorOutstand;
const getAllGudangProduksi = (state) => state.laporanproduksi.feedbackGudang;
const getErrorGudangProduksi = (state) => state.laporanproduksi.errorGudang;
const getAllKirimProduksi = (state) => state.laporanproduksi.feedback;
const getErrorKirimProduksi = (state) => state.laporanproduksi.error;
const getIsEditLaporanProduksi = (state) => state.laporanproduksi.isEdit;
const getDivisiGudang = (state) => state.laporanproduksi.divisiGudang;
const getDivisiAll = (state) => state.laporanproduksi.dataDivisi;
const getDivisi = (state) => state.laporanproduksi.divisi;
const getDataTukangByDivisi = (state) =>
  state.laporanproduksi.dataTukangByDivisi;
const getDataPeriode = (state) => state.laporanproduksi.dataPeriode;
const data = {
  getAllTerimaProduksi,
  getErrorTerimaProduksi,
  getAllKirimProduksi,
  getErrorKirimProduksi,
  getIsEditLaporanProduksi,
  getAllTerimaTambahanProduksi,
  getErrorTerimaTambahanProduksi,
  getAllTerimaBatuProduksi,
  getErrorTerimaBatuProduksi,
  getAllOutstandProduksi,
  getErrorOutstandProduksi,
  getAllGudangProduksi,
  getErrorGudangProduksi,
  getDivisiGudang,
  getAllSusutProduksi,
  getDivisiAll,
  getDivisi,
  getDataTukangByDivisi,
  getDataPeriode,
};
export default data;
