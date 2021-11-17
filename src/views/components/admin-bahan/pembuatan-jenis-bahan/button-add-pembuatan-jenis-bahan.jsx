import React, { useState } from "react";
import { Button } from "antd";
import FormTambahBahan from "./form-tambah-bahan";
import FormTambahJenisBahan from "./form-pembuatan-jenis-bahan";

const ModalBahan = () => {
  const [visibletambahbahan, setVisibleTambahBahan] = useState(false);
  const [visiblejenisbahan, setVisibleJenisBahan] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisibleTambahBahan(false);
    setVisibleJenisBahan(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisibleJenisBahan(true);
        }}
      >
        + Tambah Detail Jenis Bahan
      </Button>
      <FormTambahJenisBahan
        visible={visiblejenisbahan}
        onCreate={onCreate}
        onCancel={() => {
          setVisibleJenisBahan(false);
        }}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setVisibleTambahBahan(true);
        }}
      >
        + Tambah Bahan
      </Button>
      <FormTambahBahan
        visible={visibletambahbahan}
        onCreate={onCreate}
        onCancel={() => {
          setVisibleTambahBahan(false);
        }}
      />
    </div>
  );
};

export default ModalBahan;
