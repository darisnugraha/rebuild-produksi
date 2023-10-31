import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaJOCabang from "./form-terima-jo-cabang";

const ModalTerimaJOCabang = () => {
  const [visible, setVisible] = useState(false);

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
      <FormTerimaJOCabang
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaJOCabang;
