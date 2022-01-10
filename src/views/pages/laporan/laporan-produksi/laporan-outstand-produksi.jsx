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
import FormLaporanOutstandProduksi from "../../../components/laporan/laporan-produksi/laporan-outstand-produksi/form-laporan-outstand-produksi";
import TableLaporanOutstandProduksi from "../../../components/laporan/laporan-produksi/laporan-outstand-produksi/table-laporan-outstand-produksi";
import BtnPrint from "../../../components/laporan/laporan-produksi/laporan-outstand-produksi/btn-print-excel-pdf";
import OutstandProduksi from "../../../../application/selectors/laporanproduksi";

const LaporanOutstandProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    dispatch(getAllMasterTukang);
    document.title = "Laporan Outstand Produksi";
  }, [dispatch]);
  const dataLaporanOutstandProduksi = useSelector(
    OutstandProduksi.getAllOutstandProduksi
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/outstand">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Outstand Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Outstand Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Outstand Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanOutstandProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanOutstandProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanOutstandProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanOutstandProduksi.length === 0 ? "none" : "",
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

export default LaporanOutstandProduksi;
