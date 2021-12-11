import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBahan from "./form-terima-bahan";
import { getSaldoBahanTukang } from "../../../application/actions/terimabahan";
import { useDispatch } from "react-redux";

const ModalTerimaBahan = () => {
  const dispatch = useDispatch();
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
          dispatch(getSaldoBahanTukang({ staff: null }));
        }}
      >
        + Data Terima
      </Button>
      <FormTerimaBahan
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaBahan;
