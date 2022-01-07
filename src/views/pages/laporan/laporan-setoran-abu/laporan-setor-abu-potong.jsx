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
import FormLaporanSetorAbuPotong from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-potong/form-laporan-setor-abu-potong";
import TableLaporanSetorAbuPotong from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-potong/table-laporan-setor-abu-potong";
import BtnPrint from "../../../components/laporan/laporan-setoran-abu/laporan-setor-abu-potong/btn-print-excel-pdf";
import SetorAbuCOR from "../../../../application/selectors/laporansetorabupotong";

const LaporanSetorAbuPotong = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Laporan Setor Abu Potong";
  }, [dispatch]);
  const dataLaporanSetorAbuPotong = useSelector(
    SetorAbuCOR.getAllLaporanSetorAbuPotong
  );

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/laporan/setor-abu/setor-abu-potong">
            Laporan Setoran Abu
          </Link>
        </li>
        <li className="breadcrumb-item active">Setor Abu Potong</li>
      </ol>
      <h1 className="page-header">
        Laporan Setoran Abu <small>Setor Abu Potong</small>
      </h1>
      <Panel>
        <PanelHeader>Setor Abu Potong</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormLaporanSetorAbuPotong />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSetorAbuPotong.length === 0 ? "none" : "",
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Laporan
                </Divider>
              </div>
              <div className="col-12">
                <TableLaporanSetorAbuPotong />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
                display: dataLaporanSetorAbuPotong.length === 0 ? "none" : "",
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

export default LaporanSetorAbuPotong;
