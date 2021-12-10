const getAllNoKirimBatuByTanggal = (state) => state.terimabatu.noKirim;
const getErrorTerimaBatu = (state) => state.terimabatu.error;
const getIsEditTerimaBatu = (state) => state.terimabatu.isEdit;
const data = {
  getAllNoKirimBatuByTanggal,
  getErrorTerimaBatu,
  getIsEditTerimaBatu,
};
export default data;
