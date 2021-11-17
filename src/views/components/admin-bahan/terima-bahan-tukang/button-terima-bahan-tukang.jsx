import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBahanTukang from "./form-terima-bahan-tukang";

const ModalTerimaBahanTukang = () => {
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
        + Data Terima
      </Button>
      <FormTerimaBahanTukang
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaBahanTukang;
