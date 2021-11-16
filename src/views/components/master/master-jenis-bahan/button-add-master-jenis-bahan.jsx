import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterJenisBahan from "./form-master-jenis-bahan";

const ModalMasterJenisBahan = () => {
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
        + Tambah Jenis Bahan Baru
      </Button>
      <FormTambahMasterJenisBahan
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterJenisBahan;
