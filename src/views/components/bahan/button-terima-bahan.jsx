import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBahan from "./form-terima-bahan";
import {
  setDivisi,
  getTukangByDivisi,
} from "../../../application/actions/terimabahan";
import { useDispatch } from "react-redux";
import getLocal from "../../../infrastructure/services/local/get-local";

const ModalTerimaBahan = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const divisi = getLocal("divisi");

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
          dispatch(
            getTukangByDivisi(
              divisi === "Admin" ? "ADMIN PUSAT" : divisi.toUpperCase()
            )
          );
          dispatch(setDivisi(divisi));
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
