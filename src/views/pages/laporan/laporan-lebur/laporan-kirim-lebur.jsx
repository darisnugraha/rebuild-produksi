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
import FormLaporanKirimLebur from "../../../components/laporan/laporan-lebur/laporan-kirim-lebur/form-laporan-kirim-lebur";
import TableLaporanKirimLebur from "../../../components/laporan/laporan-lebur/laporan-kirim-lebur/table-laporan-kirim-lebur";
import BtnPrint from "../../../components/laporan/laporan-lebur/laporan-kirim-lebur/btn-print-excel-pdf";
import KirimLebur from "../../../../application/selectors/laporanlebur";

const LaporanKirimLebur = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Kirim Lebur";
  }, [dispatch]);
  const dataLaporanKirimLebur = useSelector(KirimLebur.getAllLaporanKirimLebur);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/lebur/kirim">Laporan Lebur</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Lebur</li>
      </ol>
      <h1 className="page-header">
        Laporan Lebur <small>Kirim Lebur</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Lebur</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanKirimLebur />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimLebur.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanKirimLebur />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanKirimLebur.length === 0 ? "none" : "",
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

export default LaporanKirimLebur;
