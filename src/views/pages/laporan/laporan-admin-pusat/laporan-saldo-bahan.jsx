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
import FormLaporanSaldoBahanPusat from "../../../components/laporan/laporan-admin-pusat/laporan-saldo-bahan/form-laporan-saldo-bahan";
import TableLaporanSaldoBahanPusat from "../../../components/laporan/laporan-admin-pusat/laporan-saldo-bahan/table-laporan-saldo-bahan";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-saldo-bahan/btn-print-excel-pdf";
import SaldoBahan from "../../../../application/selectors/laporansaldobahanpusat";
import { getAllMasterTukang } from "../../../../application/actions/mastertukang";
import { getAllGroupBahan } from "../../../../application/actions/groupbahan";
import { getAllDivisi } from "../../../../application/actions/kirimbahanadmin";

const LaporanSaldoBahanPusat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterTukang);
    dispatch(getAllGroupBahan);
    dispatch(getAllDivisi);
    document.title = "Laporan Saldo Bahan";
  }, [dispatch]);
  const dataLaporanSaldoBahanPusat = useSelector(
    SaldoBahan.getAllLaporanSaldoBahanPusat
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/saldo-bahan">Laporan Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Saldo Bahan</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Saldo Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Saldo Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSaldoBahanPusat />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSaldoBahanPusat.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSaldoBahanPusat />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSaldoBahanPusat.length === 0 ? "none" : "",
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

export default LaporanSaldoBahanPusat;
