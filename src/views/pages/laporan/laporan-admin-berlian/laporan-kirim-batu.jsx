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
import FormLaporanKirimBatu from "../../../components/laporan/laporan-admin-berlian/laporan-kirim-batu/form-laporan-kirim-batu";
import TableLaporanKirimBatu from "../../../components/laporan/laporan-admin-berlian/laporan-kirim-batu/table-laporan-kirim-batu";
import BtnPrint from "../../../components/laporan/laporan-admin-berlian/laporan-kirim-batu/btn-print-excel-pdf";
import KirimBatu from "../../../../application/selectors/laporankirimbatu";

const LaporanKirimBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kirim Batu";
  }, [dispatch]);
  const dataLaporanKirimBatu = useSelector(KirimBatu.getAllLaporanKirimBatu);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-berlian/kirim-batu">
            Laporan Admin Berlian
          </Link>
        </li>
        <li className="breadcrumb-item active">Kirim Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Berlian <small>Kirim Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimBatu.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimBatu.length === 0 ? "none" : "",
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

export default LaporanKirimBatu;
