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
import FormMasterMarketing from "../../components/master/master-marketing/button-add-master-marketing";
import TableMasterMarketing from "../../components/master/master-marketing/table-master-marketing";

const MasterMarketing = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Master Marketing";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/marketing">Master</Link>
        </li>
        <li className="breadcrumb-item active">Marketing</li>
      </ol>
      <h1 className="page-header">
        Master <small>Marketing</small>
      </h1>
      <Panel>
        <PanelHeader>Master Marketing</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterMarketing />
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
                  Tabel Master Marketing
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterMarketing />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterMarketing;
