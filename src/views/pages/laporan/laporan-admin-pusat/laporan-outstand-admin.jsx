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
import FormLaporanOutstandAdmin from "../../../components/laporan/laporan-admin-pusat/laporan-outstand-admin/form-laporan-outstand-admin";
import TableLaporanOutstandAdmin from "../../../components/laporan/laporan-admin-pusat/laporan-outstand-admin/table-laporan-outstand-admin";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-outstand-admin/btn-print-excel-pdf";
import OutstandAdmin from "../../../../application/selectors/laporanoutstandadmin";
import { getAllMasterTukang } from "../../../../application/actions/mastertukang";

const LaporanOutstandAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterTukang);
    document.title = "Laporan Outstand Admin";
  }, [dispatch]);
  const dataLaporanOutstandAdmin = useSelector(
    OutstandAdmin.getAllLaporanOutstandAdmin
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/outstand-admin">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Outstand Admin</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Outstand Admin</small>
      </h1>
      <Panel>
        <PanelHeader>Outstand Admin</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanOutstandAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanOutstandAdmin.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanOutstandAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanOutstandAdmin.length === 0 ? "none" : "",
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

export default LaporanOutstandAdmin;
