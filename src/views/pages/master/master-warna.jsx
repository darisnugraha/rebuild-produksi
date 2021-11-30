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
import FormMasterWarna from "../../components/master/master-warna/button-add-master-warna";
import TableMasterWarna from "../../components/master/master-warna/table-master-warna";
import { getAllMasterWarna } from "../../../application/actions/masterwarna.jsx";

const MasterWarna = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterWarna);
    document.title = "Master Warna";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/warna">Master</Link>
        </li>
        <li className="breadcrumb-item active">Warna</li>
      </ol>
      <h1 className="page-header">
        Master <small>Warna</small>
      </h1>
      <Panel>
        <PanelHeader>Master Warna</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterWarna />
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
                  Tabel Master Warna
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterWarna />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterWarna;
