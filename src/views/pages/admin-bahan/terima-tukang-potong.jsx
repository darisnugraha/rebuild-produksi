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
import { getAllMasterJenisBahan } from "../../../application/actions/masterjenisbahan";
import FormTerimaTukangPotong from "../../components/admin-bahan/terima-tukang-potong/button-terima-tukang-potong";

const TerimaTukangPotong = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterJenisBahan);
    document.title = "Terima Tukang Potong";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/terima-tukang-potong">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Terima Tukang Potong</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Terima Tukang Potong</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Tukang Potong</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaTukangPotong />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaTukangPotong;
