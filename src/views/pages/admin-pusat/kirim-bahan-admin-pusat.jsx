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
import FormKirimBahanAdminPusat from "../../components/admin-pusat/kirim-bahan-admin/button-kirim-bahan-admin-pusat";
import { useLocation } from "react-router";
import {
  getAllDivisi,
  getAllStaffStockBahanDivisi,
  getAllStockBahanDivisi,
} from "../../../application/actions/kirimbahanadminpusat.jsx";
import { getAllMasterTukang } from "../../../application/actions/mastertukang.jsx";

const KirimBahanAdminPusat = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllStockBahanDivisi);
    dispatch(getAllStaffStockBahanDivisi);
    dispatch(getAllDivisi);
    dispatch(getAllMasterTukang);
    localStorage.setItem("divisi", "Admin Pusat");
    document.title = "Kirim Bahan Admin";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={locationLink}>Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Bahan Admin</li>
      </ol>
      <h1 className="page-header">
        Admin Pusat <small>Kirim Bahan Admin</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Bahan Admin</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimBahanAdminPusat />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimBahanAdminPusat;
