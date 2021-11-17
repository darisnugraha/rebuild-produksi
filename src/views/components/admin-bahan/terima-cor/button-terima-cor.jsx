import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaCOR from "./form-terima-cor";

const ModalTerimaCOR = () => {
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
        + Detail Pohon
      </Button>
      <FormTerimaCOR
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaCOR;
