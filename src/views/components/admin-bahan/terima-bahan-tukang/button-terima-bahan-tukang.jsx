import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBahanTukang from "./form-terima-bahan-tukang";
import { useDispatch } from "react-redux";
import {
  getAllBahanAsalTukang,
  getAllTukangAsalDivisi,
  getBeratBahan,
} from "../../../../application/actions/terimabahantukang";

const ModalTerimaBahanTukang = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          dispatch(getAllTukangAsalDivisi({ divisi: null }));
          dispatch(getAllBahanAsalTukang({ staff: null }));
          dispatch(getBeratBahan({ bahan: null }));
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

export default ModalTerimaBahanTukang;
