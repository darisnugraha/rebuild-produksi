import React, { useState } from "react";
import { Button } from "antd";
import FormTerimaBahan from "./form-terima-bahan";
import {
  setDivisi,
  getTukangByDivisi,
  getBahanbyDivisiAndStaff,
} from "../../../application/actions/terimabahan";
import { useDispatch, useSelector } from "react-redux";
import getLocal from "../../../infrastructure/services/local/get-local";
import TerimaBahan from "../../../application/selectors/terimabahan";

const ModalTerimaBahan = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const divisi = getLocal("divisi");
  const dataStaffDivisi = useSelector(TerimaBahan.getTukangByDivisi);
  const dataTukangAsal = useSelector(TerimaBahan.getTukangAsal);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  return (
    <div>
      {divisi === "Admin" ? (
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            dispatch(
              getBahanbyDivisiAndStaff({
                staff: dataTukangAsal[0]?.nama_tukang,
              })
            );
          }}
        >
          + Data Terima
        </Button>
      ) : (
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
            dispatch(
              getTukangByDivisi(
                divisi === "Admin" ? "ADMIN PUSAT" : divisi.toUpperCase()
              )
            );
            dispatch(
              getBahanbyDivisiAndStaff({
                staff:
                  divisi === "Admin"
                    ? "ADMIN BAHAN"
                    : dataStaffDivisi[0]?.nama_tukang,
              })
            );
            dispatch(setDivisi(divisi));
          }}
        >
          + Data Terima
        </Button>
      )}

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
