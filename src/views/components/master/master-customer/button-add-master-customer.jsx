import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterCustomer from "./form-master-customer";

const ModalMasterCustomer = () => {
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
        + Tambah Customer Baru
      </Button>
      <FormTambahMasterCustomer
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterCustomer;
