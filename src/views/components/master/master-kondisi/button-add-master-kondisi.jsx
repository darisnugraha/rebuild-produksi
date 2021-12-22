import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterKondisi from "./form-master-kondisi";

const ModalMasterKondisi = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Kondisi Baru
      </Button>
      <FormTambahMasterKondisi
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterKondisi;
