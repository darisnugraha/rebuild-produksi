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
import FormLaporanSetorAbuCOR from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-cor/form-laporan-setor-abu-cor";
import TableLaporanSetorAbuCOR from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-cor/table-laporan-setor-abu-cor";
import BtnPrint from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-cor/btn-print-excel-pdf";
import SetorAbuCOR from "../../../../application/selectors/laporansetorabucor";

const LaporanSetorAbuCOR = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Setor Abu COR";
  }, [dispatch]);
  const dataLaporanSetorAbuCOR = useSelector(
    SetorAbuCOR.getAllLaporanSetorAbuCOR
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/setor-abu/setor-abu-cor">Laporan Setoran Abu</Link>
        </li>
        <li className="breadcrumb-item active">Setor Abu COR</li>
      </ol>
      <h1 className="page-header">
        Laporan Setoran Abu <small>Setor Abu COR</small>
      </h1>
      <Panel>
        <PanelHeader>Setor Abu COR</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSetorAbuCOR />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSetorAbuCOR.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSetorAbuCOR />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSetorAbuCOR.length === 0 ? "none" : "",
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

export default LaporanSetorAbuCOR;
