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
import FormLaporanTambahSaldoBahan from "../../../components/laporan/laporan-admin-bahan/laporan-tambah-saldo-bahan/form-laporan-tambah-saldo-bahan";
import TableLaporanTambahSaldoBahan from "../../../components/laporan/laporan-admin-bahan/laporan-tambah-saldo-bahan/table-laporan-tambah-saldo-bahan";
import BtnPrint from "../../../components/laporan/laporan-admin-bahan/laporan-tambah-saldo-bahan/btn-print-excel-pdf";
import TambahSaldoBahan from "../../../../application/selectors/laporantambahsaldobahan";

const LaporanTambahSaldoBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Tambah Saldo Bahan";
  }, [dispatch]);
  const dataLaporanTambahSaldoBahan = useSelector(
    TambahSaldoBahan.getAllLaporanTambahSaldoBahan
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-bahan/tambah-saldo-bahan">
            Laporan Admin Bahan
          </Link>
        </li>
        <li className="breadcrumb-item active">Tambah Saldo Bahan</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Bahan <small>Tambah Saldo Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah Saldo Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTambahSaldoBahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTambahSaldoBahan.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTambahSaldoBahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTambahSaldoBahan.length === 0 ? "none" : "",
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

export default LaporanTambahSaldoBahan;
