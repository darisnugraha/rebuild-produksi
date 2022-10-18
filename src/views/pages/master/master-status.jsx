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
import FormMasterStatus from "../../components/master/master-status/button-add-master-status";
import TableMasterStatus from "../../components/master/master-status/table-master-status";
import { getAllMasterStatus } from "../../../application/actions/masterstatus";

const MasterStatus = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterStatus);
    document.title = "Master Status";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/status">Master</Link>
        </li>
        <li className="breadcrumb-item active">Status</li>
      </ol>
      <h1 className="page-header">
        Master <small>Status</small>
      </h1>
      <Panel>
        <PanelHeader>Master Status</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterStatus />
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
                  Tabel Master Status
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterStatus />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterStatus;
