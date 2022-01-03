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
import FormLaporanPembuatanJenisBahan from "../../../components/laporan/laporan-admin-bahan/laporan-pembuatan-jenis-bahan/form-laporan-pembuatan-jenis-bahan";
import TableLaporanPembuatanJenisBahan from "../../../components/laporan/laporan-admin-bahan/laporan-pembuatan-jenis-bahan/table-laporan-pembuatan-jenis-bahan";
import BtnPrint from "../../../components/laporan/laporan-admin-bahan/laporan-pembuatan-jenis-bahan/btn-print-excel-pdf";
import PembuatanJenisBahan from "../../../../application/selectors/laporanpembuatanjenisbahan";

const LaporanPembuatanJenisBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Pembuatan Jenis Bahan";
  }, [dispatch]);
  const dataLaporanPembuatanJenisBahan = useSelector(
    PembuatanJenisBahan.getAllLaporanPembuatanJenisBahan
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-bahan/pembuatan-jenis-bahan">
            Laporan Admin Bahan
          </Link>
        </li>
        <li className="breadcrumb-item active">Pembuatan Jenis Bahan</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Bahan <small>Pembuatan Jenis Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Pembuatan Jenis Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanPembuatanJenisBahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanPembuatanJenisBahan.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanPembuatanJenisBahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanPembuatanJenisBahan.length === 0 ? "none" : "",
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

export default LaporanPembuatanJenisBahan;
