import React, { useState } from "react";
import { Button } from "antd";
import FormKirimJO from "./form-kirim-jo";
import FormDetailTambahan from "./form-detail-tambahan";
import FormDetailBatu from "./form-detail-batu";
import getLocal from "../../../infrastructure/services/local/get-local";
import KirimBahanAdmin from "../../../application/selectors/kirimbahanadmin";
import { useDispatch, useSelector } from "react-redux";
import { getTukangByDivisi } from "../../../application/actions/kirimjo";

const ModalKirimJO = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleTambahan, setVisibleTambahan] = useState(false);
  const [visibleBatu, setVisibleBatu] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const dataHead = getLocal("kirim_jo_head") || [];
  const dataDivisi = useSelector(KirimBahanAdmin.getAllDivisi);
  const dataTambahan = getLocal("detail_tambahan") || [];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          dispatch(getTukangByDivisi(dataDivisi[1]?.divisi));
        }}
      >
        + Data JO
      </Button>
      <FormKirimJO
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setVisibleBatu(true);
        }}
      >
        + Detail Batu
      </Button>
      <FormDetailBatu
        visible={visibleBatu}
        onCreate={onCreate}
        onCancel={() => {
          setVisibleBatu(false);
        }}
      />
      <Button
        type="primary"
        style={{ marginLeft: "10px" }}
        onClick={() => {
          setVisibleTambahan(true);
        }}
        disabled={dataHead.length === dataTambahan.length}
      >
        + Detail Tambahan
      </Button>
      <FormDetailTambahan
        visible={visibleTambahan}
        onCreate={onCreate}
        onCancel={() => {
          setVisibleTambahan(false);
        }}
      />
    </div>
  );
};

export default ModalKirimJO;
