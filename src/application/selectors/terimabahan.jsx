const getBahan = (state) => state.terimabahan.feedback;
const getSaldoBahanTukang = (state) => state.terimabahan.dataSaldoBahan;
const getErrorTerimaBahan = (state) => state.terimabahan.error;
const getIsEditTerimaBahan = (state) => state.terimabahan.isEdit;
const getBeratBahan = (state) => state.terimabahan.beratBahan;
const getTukangDivisi = (state) => state.terimabahan.feedbackTukang;
const getTukangByDivisi = (state) => state.terimabahan.feedbackTukangByTukang;
const getAllDivisi = (state) => state.terimabahan.dataDivisi;
const getTukangAsal = (state) => state.terimabahan.tukangAsal;
const data = {
  getAllDivisi,
  getTukangAsal,
  getTukangByDivisi,
  getTukangDivisi,
  getBahan,
  getSaldoBahanTukang,
  getErrorTerimaBahan,
  getIsEditTerimaBahan,
  getBeratBahan,
};
export default data;
