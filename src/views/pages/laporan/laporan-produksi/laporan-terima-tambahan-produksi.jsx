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
import { getAllDivisi } from "../../../../application/actions/kirimbahanadmin";
import FormLaporanTerimaTambahanProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-tambahan-produksi/form-laporan-terima-tambahan-produksi";
import TableLaporanTerimaTambahanProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-tambahan-produksi/table-laporan-terima-tambahan-produksi";
import BtnPrint from "../../../components/laporan/laporan-produksi/laporan-terima-tambahan-produksi/btn-print-excel-pdf";
import TerimaProduksi from "../../../../application/selectors/laporanproduksi";

const LaporanTerimaTambahanProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    document.title = "Laporan Terima Tambahan Produksi";
  }, [dispatch]);
  const dataLaporanTerimaTambahanProduksi = useSelector(
    TerimaProduksi.getAllTerimaTambahanProduksi
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/terima-tambahan">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Terima Tambahan Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Terima Tambahan Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Tambahan Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaTambahanProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTerimaTambahanProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaTambahanProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTerimaTambahanProduksi.length === 0 ? "none" : "",
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

export default LaporanTerimaTambahanProduksi;
