import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterDivisi from "./form-master-divisi";

const ModalMasterDivisi = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Divisi Baru
      </Button>
      <FormTambahMasterDivisi
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterDivisi;
