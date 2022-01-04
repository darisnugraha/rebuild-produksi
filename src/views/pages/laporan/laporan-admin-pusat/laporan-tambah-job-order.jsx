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
import FormLaporanTambahJobOrder from "../../../components/laporan/laporan-admin-pusat/laporan-tambah-job-order/form-laporan-tambah-job-order";
import TableLaporanTambahJobOrder from "../../../components/laporan/laporan-admin-pusat/laporan-tambah-job-order/table-laporan-tambah-job-order";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-tambah-job-order/btn-print-excel-pdf";
import TambahJobOrder from "../../../../application/selectors/laporantambahjoborder";

const LaporanTambahJobOrder = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Tambah Job Order";
  }, [dispatch]);
  const dataLaporanTambahJobOrder = useSelector(
    TambahJobOrder.getAllLaporanTambahJobOrder
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/tambah-job-order">
            Laporan Admin Pusat
          </Link>
        </li>
        <li className="breadcrumb-item active">Tambah Job Order</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Tambah Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTambahJobOrder />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTambahJobOrder.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTambahJobOrder />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTambahJobOrder.length === 0 ? "none" : "",
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

export default LaporanTambahJobOrder;
