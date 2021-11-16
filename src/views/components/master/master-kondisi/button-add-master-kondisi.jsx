import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterKondisi from "./form-master-kondisi";

const ModalMasterKondisi = () => {
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
        + Tambah Kondisi Baru
      </Button>
      <FormTambahMasterKondisi
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterKondisi;
