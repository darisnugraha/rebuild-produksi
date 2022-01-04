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
import FormLaporanKirimJoAdmin from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-jo-admin/form-laporan-kirim-jo-admin";
import TableLaporanKirimJoAdmin from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-jo-admin/table-laporan-kirim-jo-admin";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-kirim-jo-admin/btn-print-excel-pdf";
import KirimJoAdmin from "../../../../application/selectors/laporankirimjoadmin";
import { getAllMasterTukang } from "../../../../application/actions/mastertukang";

const LaporanKirimJoAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterTukang);
    document.title = "Laporan Kirim Job Order";
  }, [dispatch]);
  const dataLaporanKirimJoAdmin = useSelector(
    KirimJoAdmin.getAllLaporanKirimJoAdmin
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/kirim-jo">Laporan Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Job Order</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kirim Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimJoAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimJoAdmin.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimJoAdmin />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimJoAdmin.length === 0 ? "none" : "",
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

export default LaporanKirimJoAdmin;
