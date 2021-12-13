import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaTambahan from "./form-terima-tambahan";
import { getSaldoBahanTukang } from "../../../../application/actions/terimabahan";
import { useDispatch } from "react-redux";

const ModalTerimaTambahan = () => {
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
      <FormTerimaTambahan
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaTambahan;
