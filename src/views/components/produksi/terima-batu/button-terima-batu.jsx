import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBatu from "./form-terima-batu";
import { useDispatch } from "react-redux";
import { simpanDataDetailKirimBatuLokal } from "../../../../application/actions/terimabatu";

const ModalTerimaJO = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

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
      <FormTerimaBatu
        visible={visible}
        onCreate={() => {
          dispatch(simpanDataDetailKirimBatuLokal);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaJO;
