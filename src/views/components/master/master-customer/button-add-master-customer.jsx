import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterCustomer from "./form-master-customer";

const ModalMasterCustomer = () => {
  const [visible, setVisible] = useState(false);

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
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterCustomer;
