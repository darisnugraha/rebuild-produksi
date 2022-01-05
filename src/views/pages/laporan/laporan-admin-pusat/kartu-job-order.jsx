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
import FormLaporanKartuJo from "../../../components/laporan/laporan-admin-pusat/laporan-kartu-jo/form-laporan-kartu-jo";
import TableLaporanKartuJo from "../../../components/laporan/laporan-admin-pusat/laporan-kartu-jo/table-laporan-kartu-jo";
import BtnPrint from "../../../components/laporan/laporan-admin-pusat/laporan-kartu-jo/btn-print-excel-pdf";
import KartuJobOrder from "../../../../application/selectors/laporankartujoborder";

const LaporanKartuJo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kartu Job Order";
  }, [dispatch]);
  const dataLaporanKartuJo = useSelector(KartuJobOrder.getAllKartuJobOrder);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/admin-pusat/kartu-jo">Laporan Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Kartu Job Order</li>
      </ol>
      <h1 className="page-header">
        Laporan Admin Pusat <small>Kartu Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Kartu Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKartuJo />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKartuJo.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKartuJo />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKartuJo.length === 0 ? "none" : "",
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

export default LaporanKartuJo;
