import React, { useState } from "react";
import { Button } from "antd";
import FormTambahKirimLebur from "./form-kirim-lebur";
import { useDispatch } from "react-redux";
import {
  getAllSaldoBahanOpen,
  simpanDataLocalKirimLebur,
} from "../../../../application/actions/kirimlebur";

const ModalKirimLebur = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          dispatch(getAllSaldoBahanOpen({ asalBahan: null }));
        }}
      >
        + Kirim Lebur
      </Button>
      <FormTambahKirimLebur
        visible={visible}
        onCreate={() => {
          dispatch(simpanDataLocalKirimLebur);
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
