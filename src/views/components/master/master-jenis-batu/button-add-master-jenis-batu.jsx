import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterJenisBatu from "./form-master-jenis-batu";

const ModalMasterJenisBatu = () => {
  const [visible, setVisible] = useState(false);
  
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Jenis Batu Baru
      </Button>
      <FormTambahMasterJenisBatu
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterJenisBatu;
