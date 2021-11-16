import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterBahan from "./form-master-bahan";

const ModalMasterBahan = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

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
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterBahan;
