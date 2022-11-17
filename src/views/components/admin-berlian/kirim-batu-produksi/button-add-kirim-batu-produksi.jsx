import React, { useState } from "react";
import { Button, Space } from "antd";
import FormTambahKirimBatuProduksi from "./form-kirim-batu-produksi";
import FormDetailBatuProduksi from "./form-detail-batu-produksi";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataDetailBatu,
  addDataKirimBatu,
  getBeratBatuByID,
} from "../../../../application/actions/kirimbatuproduksi";
import MasterBatu from "../../../../application/selectors/masterbatu";

const ModalKirimBatuProduksi = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleDetail, setVisibleDetail] = useState(false);
  const dataBatu = useSelector(MasterBatu.getAllMasterBatu);

  return (
    <div>
      <Space>
        <Button
          type="primary"
          onClick={() => {
            setVisible(true);
          }}
        >
          + Tambah Job Order
        </Button>
        <Button
          type="primary"
          onClick={() => {
            setVisibleDetail(true);
            dispatch(getBeratBatuByID({ kodeBatu: dataBatu[0]?.kode_batu }));
          }}
        >
          + Tambah Batu Produksi
        </Button>
      </Space>
      <FormTambahKirimBatuProduksi
        visible={visible}
        onCreate={() => {
          dispatch(addDataKirimBatu);
          // setVisible(false);
        }}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <FormDetailBatuProduksi
        visible={visibleDetail}
        onCreate={() => {
          dispatch(addDataDetailBatu);
          // setVisible(false);
        }}
        onCancel={() => {
          setVisibleDetail(false);
        }}
      />
    </div>
  );
};

export default ModalKirimBatuProduksi;
