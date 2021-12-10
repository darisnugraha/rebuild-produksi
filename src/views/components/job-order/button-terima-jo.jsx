import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaJO from "./form-terima-jo";

const ModalTerimaJO = () => {
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
      <FormTerimaJO
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaJO;
