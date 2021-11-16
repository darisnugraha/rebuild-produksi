import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterCuttingBatu from "./form-master-cutting-batu";

const ModalMasterCuttingBatu = () => {
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
        + Tambah Cutting Batu Baru
      </Button>
      <FormTambahMasterCuttingBatu
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterCuttingBatu;
