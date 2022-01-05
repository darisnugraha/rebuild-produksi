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
import FormLaporanTerimaJoAdmin from "../../../components/laporan/laporan-admin-pusat/laporan-terima-jo-admin/form-laporan-terima-jo-admin";
import TableLaporanTerimaJoAdmin from "../../../components/laporan/laporan-admin-pusat/laporan-terima-jo-admin/table-laporan-terima-jo-admin";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-terima-jo-admin/btn-print-excel-pdf";
import TerimaJoAdmin from "../../../../application/selectors/laporanterimajoadmin";

const LaporanTerimaJoAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Terima Job Order";
  }, [dispatch]);
  const dataLaporanTerimaJoAdmin = useSelector(
    TerimaJoAdmin.getAllLaporanTerimaJoAdmin
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/terima-jo">Laporan Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Terima Job Order</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Terima Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaJoAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaJoAdmin.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaJoAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaJoAdmin.length === 0 ? "none" : "",
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

export default LaporanTerimaJoAdmin;
