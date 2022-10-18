import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterStatus from "./form-master-status";

const ModalMasterStatus = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Status
      </Button>
      <FormTambahMasterStatus
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterStatus;
