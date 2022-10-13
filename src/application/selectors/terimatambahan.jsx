const getTukangTerimaTambahan = (state) => state.terimatambahan.dataTukang;
const getSaldoBahanTukang = (state) => state.terimatambahan.dataSaldoBahan;
const getErrorTerimaTambahan = (state) => state.terimatambahan.error;
const getIsEditTerimaTambahan = (state) => state.terimatambahan.isEdit;
const getBeratBahan = (state) => state.terimatambahan.beratBahan;
const getDataTambahan = (state) => state.terimatambahan.dataBahanTambahan;
const data = {
  getTukangTerimaTambahan,
  getSaldoBahanTukang,
  getErrorTerimaTambahan,
  getIsEditTerimaTambahan,
  getBeratBahan,
  getDataTambahan,
};
export default data;
