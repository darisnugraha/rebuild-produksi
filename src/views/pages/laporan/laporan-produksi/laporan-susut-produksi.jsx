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
import FormLaporanSusutProduksi from "../../../components/laporan/laporan-produksi/laporan-susut-produksi/form-laporan-susut-produksi";
import TableLaporanSusutProduksi from "../../../components/laporan/laporan-produksi/laporan-susut-produksi/table-laporan-susut-produksi";
import BtnPrint from "../../../components/laporan/laporan-produksi/laporan-susut-produksi/btn-print-excel-pdf";
import SusutProduksi from "../../../../application/selectors/laporanproduksi";
import { getDivisi } from "../../../../application/actions/laporanproduksi.jsx";

const LaporanSusutProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getDivisi);
    document.title = "Laporan Susut Produksi";
  }, [dispatch]);
  const data = useSelector(SusutProduksi.getAllSusutProduksi);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/susut">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Susut Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Susut Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Susut Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSusutProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: data.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSusutProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: data.length === 0 ? "none" : "",
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

export default LaporanSusutProduksi;
