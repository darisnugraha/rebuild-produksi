import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaTambahan from "./form-terima-tambahan";
import { useDispatch } from "react-redux";
import { getSaldoTamabahan } from "../../../../application/actions/terimatambahan";
import { getAllMasterTukangByDivisi } from "../../../../application/actions/mastertukang";

const ModalTerimaTambahan = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const onCreate = (values) => {
    console.log(values);
  };

  const divisi = localStorage.getItem("divisi");

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          dispatch(getSaldoTamabahan(divisi.toUpperCase()));
          dispatch(getAllMasterTukangByDivisi(divisi.toUpperCase()));
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
