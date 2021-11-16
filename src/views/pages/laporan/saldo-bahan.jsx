import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanSaldoBahan from "../../components/laporan/saldo-bahan/table-saldo-bahan";
import FormLaporanSaldoBahan from "../../components/laporan/saldo-bahan/form-saldo-bahan";
import BtnPrint from "../../components/laporan/saldo-bahan/btn-print-saldo-bahan";
import { pageLoadedLogin } from "../../../application/actions/ui";

const SaldoBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Saldo Bahan";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/saldo-bahan">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Saldo Bahan</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Saldo Bahan</small>
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

export default SaldoBahan;
