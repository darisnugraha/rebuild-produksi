import React, { useState } from "react";
import { Button } from "antd";
import FormGabungJO from "./form-gabung-jo";

const ModalGabungJO = () => {
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
        + Data JO
      </Button>
      <FormGabungJO
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalGabungJO;
