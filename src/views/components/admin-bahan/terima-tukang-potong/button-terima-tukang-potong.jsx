import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaTukangPotong from "./form-terima-tukang-potong";

const ModalTerimaTukangPotong = () => {
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
      <FormTerimaTukangPotong
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaTukangPotong;
