import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBatu from "./form-terima-batu";
import { useDispatch } from "react-redux";
import {
  getAllNoKirimBatuByTanggal,
  simpanDataDetailKirimBatuLokal,
} from "../../../../application/actions/terimabatu";
import moment from "moment";

const ModalTerimaJO = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const today = moment().format("YYYY-MM-DD");

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          dispatch(getAllNoKirimBatuByTanggal({ tanggal: today }));
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
