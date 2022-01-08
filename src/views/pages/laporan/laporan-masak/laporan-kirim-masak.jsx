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
import FormLaporanKirimMasak from "../../../components/laporan/laporan-masak/laporan-kirim-masak/form-laporan-kirim-masak";
import TableLaporanKirimMasak from "../../../components/laporan/laporan-masak/laporan-kirim-masak/table-laporan-kirim-masak";
import BtnPrint from "../../../components/laporan/laporan-masak/laporan-kirim-masak/btn-print-excel-pdf";
import KirimMasak from "../../../../application/selectors/laporanmasak";

const LaporanKirimMasak = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kirim Masak";
  }, [dispatch]);
  const dataLaporanKirimMasak = useSelector(KirimMasak.getAllLaporanKirimMasak);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/masak/kirim">Laporan Masak</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Masak</li>
      </ol>
      <h1 className="page-header">
        Laporan Masak <small>Kirim Masak</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Masak</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimMasak />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimMasak.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimMasak />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimMasak.length === 0 ? "none" : "",
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

export default LaporanKirimMasak;
