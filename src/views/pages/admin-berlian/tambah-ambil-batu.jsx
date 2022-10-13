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
import { getAllMasterBatu } from "../../../application/actions/masterbatu";
import TableTambahAmbilBatu from "../../components/admin-berlian/tambah-dan-ambil-batu/table-tambah-ambil-batu";
import { getSaldoBatu } from "../../../application/actions/tambahambilbatu.jsx";

const TambahAmbilBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterBatu);
    dispatch(getSaldoBatu);
    document.title = "Tambah dan Ambil Batu";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-berlian/tambah-ambil-batu">Admin Berlian</Link>
        </li>
        <li className="breadcrumb-item active">Tambah dan Ambil Batu</li>
      </ol>
      <h1 className="page-header">
        Admin Berlian <small>Tambah dan Ambil Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah dan Ambil Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <TableTambahAmbilBatu />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TambahAmbilBatu;
