import React, { useState } from "react";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { change } from "redux-form";
import FormKirimJO from "./form-kirim-jo-cabang";
import FormDetailTambahan from "./form-detail-tambahan-cabang";
import FormDetailBatu from "./form-detail-batu-cabang";
import getLocal from "../../../../infrastructure/services/local/get-local";
import KirimBahanAdmin from "../../../../application/selectors/kirimbahanadmin";
import {
  getTukangByDivisi,
  setBahanKembaliKirim,
  getDataByNoInduk,
  // getDataDetailJO,
} from "../../../../application/actions/kirimjocabang";
import KirimJOCabang from "../../../../application/selectors/kirimjocabang";
import MasterBahan from "../../../../application/selectors/masterbahan";

const ModalKirimJOCabang = () => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [visibleTambahan, setVisibleTambahan] = useState(false);
  const [visibleBatu, setVisibleBatu] = useState(false);

  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };

  const dataHead = getLocal("kirim_jo_head_cabang") || [];
  const dataDivisi = useSelector(KirimBahanAdmin.getAllDivisi);
  const dataTambahan = getLocal("detail_tambahan_cabang") || [];
  const dataInduk = useSelector(KirimJOCabang.getDataNoInduk);
  // const dataJO = useSelector(KirimJOCabang.getDataNoJO);
  const dataJenisBahan = useSelector(MasterBahan.getAllMasterBahan);
  const dataCabang = useSelector(KirimJOCabang.getAllCAbang);

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
          dispatch(getTukangByDivisi(dataDivisi[1]?.divisi));
          dispatch(getDataByNoInduk(dataInduk[0]?.no_induk_job_order));
          dispatch(
            change(
              "FormKirimJOCabang",
              "cabang_tujuan",
              `${dataCabang[0]?.kode_toko}|${dataCabang[0]?.portal}`
            )
          );
          dispatch(
            change(
              "FormKirimJOCabang",
              "no_induk_job_order",
              dataInduk[0]?.no_induk_job_order
            )
          );
          // dispatch(
          //   getDataDetailJO({ noJO: dataJO[0]?.no_job_order, type: "CHANGE" })
          // );
          // dispatch(
          //   change("FormKirimJOCabang", "no_job_order", dataJO[0]?.no_job_order)
          // );
          dispatch(
            change("FormKirimJOCabang", "jumlah_berat_batu_tak_terpakai", 0)
          );
          dispatch(setBahanKembaliKirim(dataJenisBahan[0]?.nama_bahan));
          dispatch(
            change(
              "FormKirimJOCabang",
              "bahan_kembali",
              dataJenisBahan[0]?.nama_bahan
            )
          );
          dispatch(change("FormKirimJOCabang", "berat_kirim", 0));
          dispatch(change("FormKirimJOCabang", "berat_balik", 0));
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

export default ModalKirimJOCabang;
