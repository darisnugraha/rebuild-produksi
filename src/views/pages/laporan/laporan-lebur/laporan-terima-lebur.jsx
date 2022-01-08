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
import FormLaporanTerimaLebur from "../../../components/laporan/laporan-lebur/laporan-terima-lebur/form-laporan-terima-lebur";
import TableLaporanTerimaLebur from "../../../components/laporan/laporan-lebur/laporan-terima-lebur/table-laporan-terima-lebur";
import BtnPrint from "../../../components/laporan/laporan-lebur/laporan-terima-lebur/btn-print-excel-pdf";
import TerimaLebur from "../../../../application/selectors/laporanlebur";

const LaporanTerimaLebur = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Terima Lebur";
  }, [dispatch]);
  const dataLaporanTerimaLebur = useSelector(
    TerimaLebur.getAllLaporanTerimaLebur
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/lebur/terima">Laporan Lebur</Link>
        </li>
        <li className="breadcrumb-item active">Terima Lebur</li>
      </ol>
      <h1 className="page-header">
        Laporan Lebur <small>Terima Lebur</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Lebur</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanTerimaLebur />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaLebur.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanTerimaLebur />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanTerimaLebur.length === 0 ? "none" : "",
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

export default LaporanTerimaLebur;
