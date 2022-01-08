import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../../components/panel/panel.jsx";
import { Card, Divider } from "antd";
import { pageLoadedLogin } from "../../../../application/actions/ui";
import { getAllDivisi } from "../../../../application/actions/kirimbahanadmin";
import { getAllMasterTukang } from "../../../../application/actions/mastertukang";
import FormLaporanKirimProduksi from "../../../components/laporan/laporan-produksi/laporan-kirim-produksi/form-laporan-kirim-produksi";
import TableLaporanKirimProduksi from "../../../components/laporan/laporan-produksi/laporan-kirim-produksi/table-laporan-kirim-produksi";
import BtnPrint from "../../../components/laporan/laporan-produksi/laporan-kirim-produksi/btn-print-excel-pdf";
import KirimProduksi from "../../../../application/selectors/laporanproduksi";

const LaporanKirimProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    dispatch(getAllMasterTukang);
    document.title = "Laporan Kirim Produksi";
  }, [dispatch]);
  const dataLaporanKirimProduksi = useSelector(
    KirimProduksi.getAllKirimProduksi
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/kirim">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Kirim Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <BtnPrint />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default LaporanKirimProduksi;
