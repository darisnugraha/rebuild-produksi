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
import FormMasterJenisBatu from "../../components/master/master-jenis-batu/button-add-master-jenis-batu";
import TableMasterJenisBatu from "../../components/master/master-jenis-batu/table-master-jenis-batu";
import { getAllMasterJenisBatu } from "../../../application/actions/masterjenisbatu.jsx";

const MasterJenisBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterJenisBatu);
    document.title = "Master Jenis Batu";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/jenis-batu">Master</Link>
        </li>
        <li className="breadcrumb-item active">Jenis Batu</li>
      </ol>
      <h1 className="page-header">
        Master <small>Jenis Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Master Jenis Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterJenisBatu />
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
                  Tabel Master Jenis Batu
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterJenisBatu />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterJenisBatu;
