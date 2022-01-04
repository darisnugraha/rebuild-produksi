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
import FormLaporanTerimaBatu from "../../../components/laporan/laporan-admin-pusat/laporan-terima-batu/form-laporan-terima-batu";
import TableLaporanTerimaBatu from "../../../components/laporan/laporan-admin-pusat/laporan-terima-batu/table-laporan-terima-batu";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-terima-batu/btn-print-excel-pdf";
import TerimaBatu from "../../../../application/selectors/laporanterimabatu";

const LaporanTerimaBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Terima Batu";
  }, [dispatch]);
  const dataLaporanTerimaBatu = useSelector(TerimaBatu.getAllLaporanTerimaBatu);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/terima-batu">Laporan Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Terima Batu</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Bahan <small>Terima Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaBatu.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaBatu />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaBatu.length === 0 ? "none" : "",
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

export default LaporanTerimaBatu;
