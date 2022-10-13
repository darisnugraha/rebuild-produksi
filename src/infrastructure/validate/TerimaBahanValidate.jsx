const TerimaBahanValidate = (value, event) => {
  // console.log(event.charCode==13);
  const errors = {};
  if (!value.nama_bahan) {
    errors.nama_bahan = "Nama Bahan Tidak Boleh Kosong";
  }
  if (!value.berat_bahan) {
    errors.berat_bahan = "Berat Tidak Boleh Kosong";
  }
  if (value.berat_bahan === "0") {
    errors.berat_bahan = "Berat Tidak Boleh Kosong";
  }
  return errors;
};

export default TerimaBahanValidate;
