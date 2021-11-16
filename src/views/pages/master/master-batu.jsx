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
import FormMasterBatu from "../../components/master/master-batu/button-add-master-batu";
import TableMasterBatu from "../../components/master/master-batu/table-master-batu";

const MasterBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Master Batu";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/batu">Master</Link>
        </li>
        <li className="breadcrumb-item active">Batu</li>
      </ol>
      <h1 className="page-header">
        Master <small>Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Master Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterBatu />
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
                  Tabel Master Batu
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterBatu />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterBatu;
