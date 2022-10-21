import React, { useState } from "react";
import { Button } from "antd";
import FormKirimBahanAdminPusat from "./form-kirim-bahan-admin-pusat";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import KirimBahanAdminPusat from "../../../../application/selectors/kirimbahanadminpusat";
import { getDataStaffByDivisi } from "../../../../application/actions/kirimbahanadminpusat";

const ModalKirimBahanAdminPusat = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const dataDivisi = useSelector(KirimBahanAdminPusat.getAllDivisi);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          // dispatch(getAllStockBahanByStaff({ staff: dataStaff[0]?.staff }));
          dispatch(getDataStaffByDivisi(dataDivisi[0]?.divisi));
          setVisible(true);
        }}
      >
        + Data Kirim
      </Button>
      <FormKirimBahanAdminPusat
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalKirimBahanAdminPusat;
