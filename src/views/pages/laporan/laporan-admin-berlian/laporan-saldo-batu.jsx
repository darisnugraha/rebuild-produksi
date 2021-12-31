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
import FormLaporanSaldoBatu from "../../../components/laporan/laporan-admin-berlian/laporan-saldo-batu/form-laporan-saldo-batu";
import TableLaporanSaldoBatu from "../../../components/laporan/laporan-admin-berlian/laporan-saldo-batu/table-laporan-saldo-batu";
import BtnPrint from "../../../components/laporan/laporan-admin-berlian/laporan-saldo-batu/btn-print-excel-pdf";
import SaldoBatu from "../../../../application/selectors/laporansaldobatu";

const LaporanSaldoBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Saldo Batu";
  }, [dispatch]);
  const dataLaporanSaldoBatu = useSelector(SaldoBatu.getAllLaporanSaldoBatu);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-berlian/kirim-batu">
            Laporan Admin Berlian
          </Link>
        </li>
        <li className="breadcrumb-item active">Saldo Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Berlian <small>Saldo Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Saldo Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSaldoBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSaldoBatu.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSaldoBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSaldoBatu.length === 0 ? "none" : "",
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

export default LaporanSaldoBatu;
