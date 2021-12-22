import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterWarna from "./form-master-warna";

const ModalMasterWarna = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Warna Baru
      </Button>
      <FormTambahMasterWarna
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterWarna;
