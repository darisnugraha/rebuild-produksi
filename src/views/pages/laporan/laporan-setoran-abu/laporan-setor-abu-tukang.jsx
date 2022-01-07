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
import FormLaporanSetorAbuTukang from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-tukang/form-laporan-setor-abu-tukang";
import TableLaporanSetorAbuTukang from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-tukang/table-laporan-setor-abu-tukang";
import BtnPrint from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-tukang/btn-print-excel-pdf";
import SetorAbuTukang from "../../../../application/selectors/laporansetorabutukang";

const LaporanSetorAbuTukang = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Setor Abu Tukang";
  }, [dispatch]);
  const dataLaporanSetorAbuTukang = useSelector(
    SetorAbuTukang.getAllLaporanSetorAbuTukang
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/setor-abu/setor-abu-tukang">
            Laporan Setoran Abu
          </Link>
        </li>
        <li className="breadcrumb-item active">Setor Abu Tukang</li>
      </ol>
      <h1 className="page-header">
        Laporan Setoran Abu <small>Setor Abu Tukang</small>
      </h1>
      <Panel>
        <PanelHeader>Setor Abu Tukang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSetorAbuTukang />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSetorAbuTukang.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSetorAbuTukang />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSetorAbuTukang.length === 0 ? "none" : "",
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

export default LaporanSetorAbuTukang;
