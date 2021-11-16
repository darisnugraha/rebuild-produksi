import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterJenis from "./form-master-jenis";

const ModalMasterJenis = () => {
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
        + Tambah Jenis Baru
      </Button>
      <FormTambahMasterJenis
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterJenis;
