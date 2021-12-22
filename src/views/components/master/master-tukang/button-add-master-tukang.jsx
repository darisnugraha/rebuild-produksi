import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterTukang from "./form-master-tukang";

const ModalMasterTukang = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Tukang Baru
      </Button>
      <FormTambahMasterTukang
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterTukang;
