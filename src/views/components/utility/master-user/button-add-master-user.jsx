import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterUser from "./form-master-user";

const ModalMasterUser = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah User Baru
      </Button>
      <FormTambahMasterUser
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterUser;
