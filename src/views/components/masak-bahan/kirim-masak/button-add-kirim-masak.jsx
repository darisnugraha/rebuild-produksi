import React, { useState } from "react";
import { Button } from "antd";
import FormTambahKirimMasak from "./form-kirim-masak";
import { useDispatch } from "react-redux";
import { simpanLokalKirimMasak } from "../../../../application/actions/kirimmasak";

const ModalKirimLebur = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        + Kirim Masak
      </Button>
      <FormTambahKirimMasak
        visible={visible}
        onCreate={() => {
          dispatch(simpanLokalKirimMasak);
          // setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalKirimLebur;
