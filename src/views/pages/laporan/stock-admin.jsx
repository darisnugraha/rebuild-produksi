import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanStockAdmin from "../../components/laporan/stock-admin/table-stock-admin";
import FormLaporanStockAdmin from "../../components/laporan/stock-admin/form-stock-admin";
import BtnPrint from "../../components/laporan/stock-admin/btn-print-stock-admin";
import { pageLoadedLogin } from "../../../application/actions/ui";

const StockAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Stock Admin";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/stock-admin">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Stock Admin</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Stock Admin</small>
      </h1>
      <Panel>
        <PanelHeader>Stock Admin</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanStockAdmin />
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
                <TableLaporanStockAdmin />
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

export default StockAdmin;
