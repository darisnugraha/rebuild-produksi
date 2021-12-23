import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaTukangPotong from "./form-terima-tukang-potong";

const ModalTerimaTukangPotong = () => {
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
      <FormTerimaTukangPotong
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaTukangPotong;
