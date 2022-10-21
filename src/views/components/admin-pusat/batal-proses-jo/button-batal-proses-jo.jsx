import React, { useState } from "react";
import { Button } from "antd";
import FormBatalProsesJO from "./form-batal-proses-jo";

const ModalBatalProses = () => {
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
      <FormBatalProsesJO
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalBatalProses;
