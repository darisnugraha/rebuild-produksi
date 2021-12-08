import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
} from "./../../components/panel/panel.jsx";
import { Card, Divider, Button } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllMasterJenisBahan } from "../../../application/actions/masterjenisbahan";
import FormPembuatanJenisBahan from "../../components/admin-bahan/pembuatan-jenis-bahan/button-add-pembuatan-jenis-bahan";
import TablePembuatanJenisBahan from "../../components/admin-bahan/pembuatan-jenis-bahan/table-pembuatan-jenis-bahan";
import { getAllSaldoBahanStock } from "../../../application/actions/pembuatanjenisbahan.jsx";

const PembuatanJenisBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterJenisBahan);
    dispatch(getAllSaldoBahanStock);
    document.title = "Pembuatan Jenis Bahan";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/pembuatan-jenis-bahan">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Pembuatan Jenis Bahan</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Pembuatan Jenis Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Pembuatan Jenis Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormPembuatanJenisBahan />
              </div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
              }}
            >
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Pembuatan Jenis Bahan
                </Divider>
              </div>
              <div className="col-12">
                <TablePembuatanJenisBahan />
              </div>
            </div>
          </Card>
        </PanelBody>
        <PanelFooter>
          <Button type="primary">Simpan</Button>
        </PanelFooter>
      </Panel>
    </div>
  );
};

export default PembuatanJenisBahan;
