import React, { useState } from "react";
import { Button } from "antd";
import FormTambahKirimBatuProduksi from "./form-kirim-batu-produksi";
import { useDispatch } from "react-redux";
import { addDataKirimBatu } from "../../../../application/actions/kirimbatuproduksi";

const ModalKirimBatuProduksi = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

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
        onCreate={() => {
          dispatch(addDataKirimBatu);
          setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalKirimBatuProduksi;
