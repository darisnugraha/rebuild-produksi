import React, { useState } from "react";
import { Button } from "antd";
import FormTambahBillOfMaterials from "./form-master-bill-of-materials";
import { setDetailBahan } from "../../../../application/actions/masterbillofmaterials";
import { useDispatch } from "react-redux";

const ButtonAddBillOfMaterials = () => {
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
        + Tambah Bill Of Materials
      </Button>
      <FormTambahBillOfMaterials
        visible={visible}
        onCancel={() => {
          dispatch(setDetailBahan([]));
          localStorage.removeItem("BahanDetail");
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ButtonAddBillOfMaterials;
