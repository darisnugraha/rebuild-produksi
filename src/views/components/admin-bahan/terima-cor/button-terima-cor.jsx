import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaCOR from "./form-terima-cor";

const ModalTerimaCOR = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Detail Pohon
      </Button>
      <FormTerimaCOR
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaCOR;
