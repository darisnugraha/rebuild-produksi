import React, { useState } from "react";
import { Button } from "antd";
import FormTambahBahan from "./form-tambah-bahan";
import FormTambahJenisBahan from "./form-pembuatan-jenis-bahan";
import { useDispatch } from "react-redux";
import {
  addDetailBahan,
  addDetailJenisBahan,
} from "../../../../application/actions/pembuatanjenisbahan";

const ModalBahan = () => {
  const dispatch = useDispatch();
  const [visibletambahbahan, setVisibleTambahBahan] = useState(false);
  const [visiblejenisbahan, setVisibleJenisBahan] = useState(false);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisibleJenisBahan(true);
        }}
      >
        + Tambah Detail Jenis Bahan
      </Button>
      <FormTambahJenisBahan
        visible={visiblejenisbahan}
        onCreate={() => {
          dispatch(addDetailJenisBahan);
        }}
        onCancel={() => {
          setVisibleJenisBahan(false);
        }}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setVisibleTambahBahan(true);
        }}
      >
        + Tambah Bahan
      </Button>
      <FormTambahBahan
        visible={visibletambahbahan}
        onCreate={() => {
          dispatch(addDetailBahan);
        }}
        onCancel={() => {
          setVisibleTambahBahan(false);
        }}
      />
    </div>
  );
};

export default ModalBahan;
