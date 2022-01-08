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
import FormLaporanTerimaProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-produksi/form-laporan-terima-produksi";
import TableLaporanTerimaProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-produksi/table-laporan-terima-produksi";
import BtnPrint from "../../../components/laporan/laporan-produksi/laporan-terima-produksi/btn-print-excel-pdf";
import TerimaMasak from "../../../../application/selectors/laporanproduksi";

const LaporanTerimaProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    document.title = "Laporan Terima Produksi";
  }, [dispatch]);
  const dataLaporanTerimaProduksi = useSelector(
    TerimaMasak.getAllTerimaProduksi
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/terima">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Terima Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Terima Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaProduksi.length === 0 ? "none" : "",
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

export default LaporanTerimaProduksi;
