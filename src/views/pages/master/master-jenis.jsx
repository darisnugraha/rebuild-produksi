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
import FormMasterJenis from "../../components/master/master-jenis/button-add-master-jenis";
import TableMasterJenis from "../../components/master/master-jenis/table-master-jenis";

const MasterJenis = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Master Jenis";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/jenis">Master</Link>
        </li>
        <li className="breadcrumb-item active">Jenis</li>
      </ol>
      <h1 className="page-header">
        Master <small>Jenis</small>
      </h1>
      <Panel>
        <PanelHeader>Master Jenis</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterJenis />
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
                  Tabel Master Jenis
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterJenis />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterJenis;
