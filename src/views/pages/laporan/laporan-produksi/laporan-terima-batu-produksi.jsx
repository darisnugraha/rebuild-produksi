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
import FormLaporanTerimaBatuProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-batu-produksi/form-laporan-terima-batu-produksi";
import TableLaporanTerimaBatuProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-batu-produksi/table-laporan-terima-batu-produksi";
import BtnPrint from "../../../components/laporan/laporan-produksi/laporan-terima-batu-produksi/btn-print-excel-pdf";
import TerimaBatuProduksi from "../../../../application/selectors/laporanproduksi";

const LaporanTerimaBatuProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    document.title = "Laporan Terima Batu Produksi";
  }, [dispatch]);
  const dataLaporanTerimaBatuProduksi = useSelector(
    TerimaBatuProduksi.getAllTerimaBatuProduksi
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/terima-batu">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Terima Batu Produksi</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Terima Batu Produksi</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Batu Produksi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaBatuProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTerimaBatuProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaBatuProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTerimaBatuProduksi.length === 0 ? "none" : "",
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

export default LaporanTerimaBatuProduksi;
