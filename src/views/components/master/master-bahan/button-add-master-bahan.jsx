import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterBahan from "./form-master-bahan";

const ModalMasterBahan = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Bahan Baru
      </Button>
      <FormTambahMasterBahan
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterBahan;
