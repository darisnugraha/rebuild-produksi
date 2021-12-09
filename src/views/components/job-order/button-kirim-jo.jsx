import React, { useState } from "react";
import { Button } from "antd";
import FormKirimJO from "./form-kirim-jo";

const ModalKirimJO = () => {
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
      <FormKirimJO
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalKirimJO;
