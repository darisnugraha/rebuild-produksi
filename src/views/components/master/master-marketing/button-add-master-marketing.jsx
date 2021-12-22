import React, { useState } from "react";
import { Button } from "antd";
import FormTambahMasterMarketing from "./form-master-marketing";

const ModalMasterMarketing = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Marketing Baru
      </Button>
      <FormTambahMasterMarketing
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterMarketing;
