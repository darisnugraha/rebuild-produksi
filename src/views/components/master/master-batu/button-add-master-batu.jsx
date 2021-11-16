import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterBatu from "./form-master-batu";

const ModalMasterBatu = () => {
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
        + Tambah Batu Baru
      </Button>
      <FormTambahMasterBatu
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterBatu;
