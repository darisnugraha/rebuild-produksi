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
import FormMasterBahan from "../../components/master/master-bahan/button-add-master-bahan";
import TableMasterBahan from "../../components/master/master-bahan/table-master-bahan";
import { getAllMasterBahan } from "../../../application/actions/masterbahan.jsx";

const MasterBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterBahan);
    document.title = "Master Bahan";
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
        <li className="breadcrumb-item active">Bahan</li>
      </ol>
      <h1 className="page-header">
        Master <small>Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Master Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterBahan />
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
                  Tabel Master Bahan
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterBahan />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterBahan;
