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
import FormTerimaBahanCabang from "../../components/admin-bahan/terima-bahan-cabang/button-terima-bahan-cabang.jsx";
import { getAllCabang } from "../../../application/actions/terimabahancabang.jsx";

const TerimaBahanCabang = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Terima Bahan Cabang";
    dispatch(getAllCabang);
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/terima-bahan-cabang">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Terima Bahan Cabang</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Terima Bahan Cabang</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Bahan Cabang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaBahanCabang />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaBahanCabang;
