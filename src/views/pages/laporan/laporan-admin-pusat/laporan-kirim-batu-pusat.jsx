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
import FormLaporanKirimBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-batu/form-laporan-kirim-batu-pusat";
import TableLaporanKirimBatuPusat from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-batu/table-laporan-kirim-batu-pusat";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-batu/btn-print-excel-pdf";
import KirimBatuPusat from "../../../../application/selectors/laporankirimbatupusat";

const LaporanKirimBatuPusat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kirim Batu";
  }, [dispatch]);
  const dataLaporanKirimBatuPusat = useSelector(
    KirimBatuPusat.getAllLaporanKirimBatuPusat
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/kirim-batu">Laporan Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kirim Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimBatuPusat />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimBatuPusat.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimBatuPusat />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimBatuPusat.length === 0 ? "none" : "",
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

export default LaporanKirimBatuPusat;
