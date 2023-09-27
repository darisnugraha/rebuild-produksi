import React, { useState } from "react";
import { Button } from "antd";
import FormKirimBahanCabang from "./form-kirim-bahan-cabang";

const ModalKirimBahanCabang = () => {
  const [visible, setVisible] = useState(false);

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
      <FormKirimBahanCabang
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalKirimBahanCabang;
