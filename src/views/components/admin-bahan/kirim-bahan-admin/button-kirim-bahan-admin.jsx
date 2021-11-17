import React, { useState } from "react";
import { Button } from "antd";
import FormKirimBahanAdmin from "./form-kirim-bahan-admin";

const ModalKirimBahanAdmin = () => {
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
        + Data Kirim
      </Button>
      <FormKirimBahanAdmin
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalKirimBahanAdmin;
