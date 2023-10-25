import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBahanTukang from "./form-terima-bahan-cabang";
// import { useDispatch } from "react-redux";

const ModalTerimaBahanCabang = () => {
  // const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

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
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaBahanCabang;
