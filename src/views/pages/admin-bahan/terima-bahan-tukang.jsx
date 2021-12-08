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
import FormTerimaBahanTukang from "../../components/admin-bahan/terima-bahan-tukang/button-terima-bahan-tukang";
import { getAllDivisiAsalSaldoBahan } from "../../../application/actions/terimabahantukang.jsx";

const TerimaBahanTukang = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisiAsalSaldoBahan);
    document.title = "Terima Bahan Tukang";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/terima-bahan-tukang">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Terima Bahan Tukang</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Terima Bahan Tukang</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Bahan Tukang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaBahanTukang />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaBahanTukang;
