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
import FormLaporanTambahAmbilSaldoBatu from "../../../components/laporan/laporan-admin-berlian/laporan-tambah-ambil-saldo-batu/form-laporan-tambah-ambil-batu";
import TableLaporanTambahAmbilSaldoBatu from "../../../components/laporan/laporan-admin-berlian/laporan-tambah-ambil-saldo-batu/table-laporan-tambah-ambil-saldo-batu";
import BtnPrint from "../../../components/laporan/laporan-admin-berlian/laporan-tambah-ambil-saldo-batu/btn-print-excel-pdf";
import TambahAmbilSaldoBatu from "../../../../application/selectors/laporantambahambilsaldobatu";

const LaporanTambahAmbilSaldoBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Tambah dan Ambil Saldo Batu";
  }, [dispatch]);
  const dataLaporanTambahAmbilSaldoBatu = useSelector(
    TambahAmbilSaldoBatu.getAllLaporanTambahAmbilSaldoBatu
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-berlian/ambil-tambah-saldo-batu">
            Laporan Admin Berlian
          </Link>
        </li>
        <li className="breadcrumb-item active">Tambah dan Ambil Saldo Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Berlian <small>Tambah dan Ambil Saldo Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah dan Ambil Saldo Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTambahAmbilSaldoBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTambahAmbilSaldoBatu.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTambahAmbilSaldoBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTambahAmbilSaldoBatu.length === 0 ? "none" : "",
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

export default LaporanTambahAmbilSaldoBatu;
