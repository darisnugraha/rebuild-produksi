import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaLebur from "./form-terima-lebur";
import { useDispatch } from "react-redux";
import { getAllStockBahanByStaff } from "../../../../application/actions/kirimbahanadminpusat";
import KirimBahanAdminPusat from "../../../../application/selectors/kirimbahanadminpusat";
import { useSelector } from "react-redux";

const ModalTerimaLebur = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const dataStaff = useSelector(
    KirimBahanAdminPusat.getAllStaffStockBahanDivisi
  );

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          dispatch(getAllStockBahanByStaff({ staff: dataStaff[0]?.staff }));
          setVisible(true);
        }}
      >
        + Terima Lebur
      </Button>
      <FormTerimaLebur
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalTerimaLebur;
