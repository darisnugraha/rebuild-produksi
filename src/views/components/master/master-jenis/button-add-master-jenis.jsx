import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterJenis from "./form-master-jenis";

const ModalMasterJenis = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Jenis Baru
      </Button>
      <FormTambahMasterJenis
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterJenis;
