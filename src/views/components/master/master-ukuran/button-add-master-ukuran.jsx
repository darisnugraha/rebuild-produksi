import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterUkuran from "./form-master-ukuran";

const ModalMasterUkuran = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Ukuran Baru
      </Button>
      <FormTambahMasterUkuran
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterUkuran;
