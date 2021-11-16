import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Card } from "antd";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import TableLaporanKirimDesian from "../../components/laporan/kirim-desian/table-kirim-desian";
import FormLaporanKirimDesian from "../../components/laporan/kirim-desian/form-kirim-desian";
import BtnPrint from "../../components/laporan/kirim-desian/btn-print-kirim-desian";
import { pageLoadedLogin } from "../../../application/actions/ui";

const KirimDesian = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kirim per Desian";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/kirim-desian">Laporan</Link>
        </li>
        <li className="breadcrumb-item active">Kirim per Desian</li>
      </ol>
      <h1 className="page-header">
        Laporan <small>Kirim per Desian</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim per Desian</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimDesian />
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
                <TableLaporanKirimDesian />
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

export default KirimDesian;
