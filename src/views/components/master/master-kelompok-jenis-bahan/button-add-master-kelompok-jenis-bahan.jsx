import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterKelompokJenisBahan from "./form-master-kelompok-jenis-bahan";

const ButtonAddKelompokJenisBahan = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Kelompok Jenis Bahan
      </Button>
      <FormTambahMasterKelompokJenisBahan
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ButtonAddKelompokJenisBahan;
