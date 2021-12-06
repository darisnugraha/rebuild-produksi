import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import TableTambahSaldoBahan from "../../components/admin-bahan/tambah-saldo-bahan/table-saldo-bahan";

const TambahSaldoBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Tambah Saldo Bahan";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/tambah-saldo-bahan">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Tambah Saldo Bahan</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Tambah Saldo Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah Saldo Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <TableTambahSaldoBahan />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TambahSaldoBahan;
