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
import FormLaporanTerimaMasak from "../../../components/laporan/laporan-masak/laporan-terima-masak/form-laporan-terima-masak";
import TableLaporanTerimaMasak from "../../../components/laporan/laporan-masak/laporan-terima-masak/table-laporan-terima-masak";
import BtnPrint from "../../../components/laporan/laporan-masak/laporan-terima-masak/btn-print-excel-pdf";
import TerimaMasak from "../../../../application/selectors/laporanmasak";

const LaporanTerimaMasak = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Terima Masak";
  }, [dispatch]);
  const dataLaporanTerimaMasak = useSelector(
    TerimaMasak.getAllLaporanTerimaMasak
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/masak/terima">Laporan Masak</Link>
        </li>
        <li className="breadcrumb-item active">Terima Masak</li>
      </ol>
      <h1 className="page-header">
        Laporan Masak <small>Terima Masak</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Masak</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaMasak />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaMasak.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaMasak />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaMasak.length === 0 ? "none" : "",
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

export default LaporanTerimaMasak;
