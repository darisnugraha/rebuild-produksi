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
import FormMasterCuttingBatu from "../../components/master/master-cutting-batu/button-add-master-cutting-batu";
import TableMasterCuttingBatu from "../../components/master/master-cutting-batu/table-master-cutting-batu";

const MasterCuttingBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Master Cutting Batu";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/cutting-batu">Master</Link>
        </li>
        <li className="breadcrumb-item active">Cutting Batu</li>
      </ol>
      <h1 className="page-header">
        Master <small>Cutting Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Master Cutting Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterCuttingBatu />
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
                  Tabel Master Cutting Batu
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterCuttingBatu />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterCuttingBatu;
