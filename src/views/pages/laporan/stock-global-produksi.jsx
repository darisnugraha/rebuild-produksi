import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanStockGlobalProduksi from "../../components/laporan/stock-global-produksi/table-global-produksi";
import FormLaporanGlobalProduksi from "../../components/laporan/stock-global-produksi/form-global-produksi";
import BtnPrint from "../../components/laporan/stock-global-produksi/btn-print-global-produksi";
import laporanStockSelector from "../../../application/selectors/laporanstockglobalproduksi";
import ui from "../../../application/selectors/ui";
import { pageLoadedLogin } from "../../../application/actions/ui";

const StockGlobalProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Stock Global Produksi";
  }, [dispatch]);

  const datalapL = useSelector(
    laporanStockSelector.getAllLaporanStockGlobalProduksiL
  );
  const datalapR = useSelector(
    laporanStockSelector.getAllLaporanStockGlobalProduksiR
  );
  const typeTable = useSelector(ui.getTypeTableLayout);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/stock-global-produksi">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Stock Global Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Stock Global Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Stock Global Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            {typeTable === "L" ? (
              <>
                <div className="row">
                  <div className="col-12">
                    <FormLaporanGlobalProduksi />
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    marginTop: 10,
                    display: datalapL.length === 0 ? "none" : "",
                  }}
                >
                  <div className="col-12">
                    <Divider orientation="left" style={{ fontSize: "14px" }}>
                      Tabel Laporan
                    </Divider>
                  </div>
                  <div className="col-12">
                    <TableLaporanStockGlobalProduksi />
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    marginTop: 10,
                    display: datalapL.length === 0 ? "none" : "",
                  }}
                >
                  <div
                    className="col-12"
                    style={{
                      display: datalapL.length === 0 ? "none" : "",
                    }}
                  >
                    <BtnPrint />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <div className="col-12">
                    <FormLaporanGlobalProduksi />
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    marginTop: 10,
                    display: datalapR.length === 0 ? "none" : "",
                  }}
                >
                  <div className="col-12">
                    <Divider orientation="left" style={{ fontSize: "14px" }}>
                      Tabel Laporan
                    </Divider>
                  </div>
                  <div
                    className="col-12"
                    style={{
                      marginTop: 10,
                      display: datalapR.length === 0 ? "none" : "",
                    }}
                  >
                    <TableLaporanStockGlobalProduksi />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12"
                    style={{
                      display: datalapR.length === 0 ? "none" : "",
                    }}
                  >
                    <BtnPrint />
                  </div>
                </div>
              </>
            )}
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default StockGlobalProduksi;
