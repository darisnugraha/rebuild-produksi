import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card, Divider } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import FormMasterJenisBahan from "../../components/master/master-jenis-bahan/button-add-master-jenis-bahan";
import TableMasterJenisBahan from "../../components/master/master-jenis-bahan/table-master-jenis-bahan";

const MasterJenisBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Master Jenis Bahan";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/jenis-bahan">Master</Link>
        </li>
        <li className="breadcrumb-item active">Jenis Bahan</li>
      </ol>
      <h1 className="page-header">
        Master <small>Jenis Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Master Jenis Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterJenisBahan />
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
                  Tabel Master Jenis Bahan
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterJenisBahan />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterJenisBahan;
