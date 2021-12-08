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
import { getAllMasterTukang } from "../../../application/actions/mastertukang";
import { getAllSaldoBahanStock } from "../../../application/actions/pembuatanjenisbahan";
import FormKirimBahanAdmin from "../../components/admin-bahan/kirim-bahan-admin/button-kirim-bahan-admin";
import { getAllDivisi } from "../../../application/actions/kirimbahanadmin.jsx";

const KirimBahanAdmin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterTukang);
    dispatch(getAllSaldoBahanStock);
    dispatch(getAllDivisi);
    document.title = "Kirim Bahan Admin";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/kirim-bahan-admin">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Bahan Admin</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Kirim Bahan Admin</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Bahan Admin</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimBahanAdmin />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimBahanAdmin;
