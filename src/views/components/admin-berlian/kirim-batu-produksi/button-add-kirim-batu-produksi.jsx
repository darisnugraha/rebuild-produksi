import React, { useState } from "react";
import { Button } from "antd";
import FormTambahKirimBatuProduksi from "./form-kirim-batu-produksi";

const ModalKirimBatuProduksi = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Kirim Batu Produksi
      </Button>
      <FormTambahKirimBatuProduksi
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalKirimBatuProduksi;
