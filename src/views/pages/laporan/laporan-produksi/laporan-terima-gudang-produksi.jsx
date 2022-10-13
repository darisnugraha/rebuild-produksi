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
// import { getAllDivisi } from "../../../../application/actions/kirimbahanadmin";
import FormLaporanTerimaGudangProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-gudang-produksi/form-laporan-terima-gudang-produksi";
import TableLaporanTerimaGudangProduksi from "../../../components/laporan/laporan-produksi/laporan-terima-gudang-produksi/table-laporan-terima-gudang-produksi";
import BtnPrint from "../../../components/laporan/laporan-produksi/laporan-terima-gudang-produksi/btn-print-excel-pdf";
import TerimaGudangProduksi from "../../../../application/selectors/laporanproduksi";
import { getDivisiGudang } from "../../../../application/actions/laporanproduksi.jsx";

const LaporanTerimaGudangProduksi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    // dispatch(getAllDivisi);
    dispatch(getDivisiGudang);
    document.title = "Laporan Terima Gudang";
  }, [dispatch]);
  const dataLaporanTerimaGudangProduksi = useSelector(
    TerimaGudangProduksi.getAllGudangProduksi
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan-produksi/terima-gudang">Laporan Produksi</Link>
        </li>
        <li className="breadcrumb-item active">Terima Gudang</li>
      </ol>
      <h1 className="page-header">
        Laporan Produksi <small>Terima Gudang</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Gudang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaGudangProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTerimaGudangProduksi.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaGudangProduksi />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display:
                  dataLaporanTerimaGudangProduksi.length === 0 ? "none" : "",
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

export default LaporanTerimaGudangProduksi;
