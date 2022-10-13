import React, { useState } from "react";
import { Button } from "antd"
import FormMasterOriginal from "./form-master-original";

const ModalMasterOriginal = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Tambah Master Original
      </Button>
      <FormMasterOriginal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalMasterOriginal;
