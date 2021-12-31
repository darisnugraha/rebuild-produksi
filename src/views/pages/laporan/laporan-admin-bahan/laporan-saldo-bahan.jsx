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
import FormLaporanSaldoBahan from "../../../components/laporan/laporan-admin-bahan/laporan-saldo-bahan/form-laporan-saldo-bahan";
import TableLaporanSaldoBahan from "../../../components/laporan/laporan-admin-bahan/laporan-saldo-bahan/table-laporan-saldo-bahan";
import BtnPrint from "../../../components/laporan/laporan-admin-bahan/laporan-saldo-bahan/btn-print-excel-pdf";
import SaldoBahan from "../../../../application/selectors/laporansaldobahan";
import { getAllGroupBahan } from "../../../../application/actions/groupbahan.jsx";

const LaporanSaldoBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllGroupBahan);
    document.title = "Laporan Saldo Bahan";
  }, [dispatch]);
  const dataLaporanSaldoBahan = useSelector(SaldoBahan.getAllLaporanSaldoBahan);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-bahan/saldo-bahan">
            Laporan Admin Berlian
          </Link>
        </li>
        <li className="breadcrumb-item active">Saldo Bahan</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Bahan <small>Saldo Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Saldo Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSaldoBahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSaldoBahan.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSaldoBahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSaldoBahan.length === 0 ? "none" : "",
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

export default LaporanSaldoBahan;
