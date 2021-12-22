import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterJenisBahan from "./form-master-jenis-bahan";

const ModalMasterJenisBahan = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Jenis Bahan Baru
      </Button>
      <FormTambahMasterJenisBahan
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterJenisBahan;
