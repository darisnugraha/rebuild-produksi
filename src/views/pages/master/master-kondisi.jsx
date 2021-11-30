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
import FormMasterKondisi from "../../components/master/master-kondisi/button-add-master-kondisi";
import TableMasterKondisi from "../../components/master/master-kondisi/table-master-kondisi";
import { getAllMasterKondisi } from "../../../application/actions/masterkondisi.jsx";

const MasterKondisi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterKondisi);
    document.title = "Master Kondisi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/kondisi">Master</Link>
        </li>
        <li className="breadcrumb-item active">Kondisi</li>
      </ol>
      <h1 className="page-header">
        Master <small>Kondisi</small>
      </h1>
      <Panel>
        <PanelHeader>Master Kondisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterKondisi />
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
                  Tabel Master Kondisi
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterKondisi />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterKondisi;
