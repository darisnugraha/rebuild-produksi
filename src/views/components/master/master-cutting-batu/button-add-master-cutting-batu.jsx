import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterCuttingBatu from "./form-master-cutting-batu";

const ModalMasterCuttingBatu = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Cutting Batu Baru
      </Button>
      <FormTambahMasterCuttingBatu
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterCuttingBatu;
