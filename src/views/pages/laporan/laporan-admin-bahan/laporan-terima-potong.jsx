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
import FormLaporanTerimaPotong from "../../../components/laporan/laporan-admin-bahan/laporan-terima-potong/form-laporan-terima-potong";
import TableLaporanTerimaPotong from "../../../components/laporan/laporan-admin-bahan/laporan-terima-potong/table-laporan-terima-potong";
import BtnPrint from "../../../components/laporan/laporan-admin-bahan/laporan-terima-potong/btn-print-excel-pdf";
import TerimaPotong from "../../../../application/selectors/laporanterimapotong";

const LaporanTerimaPotong = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Terima Potong";
  }, [dispatch]);
  const dataLaporanTerimaPotong = useSelector(
    TerimaPotong.getAllLaporanTerimaPotong
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-bahan/terima-potong">
            Laporan Admin Bahan
          </Link>
        </li>
        <li className="breadcrumb-item active">Terima Potong</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Bahan <small>Terima Potong</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Potong</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaPotong />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaPotong.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaPotong />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaPotong.length === 0 ? "none" : "",
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

export default LaporanTerimaPotong;
