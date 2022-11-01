const ValidasiTambahAmbilBatu = (value) => {
  const errors = {};
  if (!value.keterangan) {
    errors.keterangan = "Keterangan Tidak Boleh Kosong";
  }

  return errors;
};

export default ValidasiTambahAmbilBatu;
