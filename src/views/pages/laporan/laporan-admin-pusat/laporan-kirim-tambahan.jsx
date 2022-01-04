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
import FormLaporanKirimTambahan from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-tambahan/form-laporan-kirim-tambahan";
import TableLaporanKirimTambahan from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-tambahan/table-laporan-kirim-tambahan";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-tambahan/btn-print-excel-pdf";
import KirimTambahan from "../../../../application/selectors/laporankirimtambahan";

const LaporanKirimTambahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kirim Tambahan";
  }, [dispatch]);
  const dataLaporanKirimTambahan = useSelector(
    KirimTambahan.getAllLaporanKirimTambahan
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/kirim-tambahan">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Tambahan</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kirim Tambahan</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Tambahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimTambahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimTambahan.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimTambahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimTambahan.length === 0 ? "none" : "",
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

export default LaporanKirimTambahan;
