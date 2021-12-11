const getSaldoBahanTukang = (state) => state.terimabahan.dataSaldoBahan;
const getErrorTerimaBahan = (state) => state.terimabahan.error;
const getIsEditTerimaBahan = (state) => state.terimabahan.isEdit;
const getBeratBahan = (state) => state.terimabahan.beratBahan;
const data = {
  getSaldoBahanTukang,
  getErrorTerimaBahan,
  getIsEditTerimaBahan,
  getBeratBahan,
};
export default data;
