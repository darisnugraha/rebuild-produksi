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
import FormMasterDivisi from "../../components/utility/master-divisi/button-add-master-divisi";
import TableMasterDivisi from "../../components/utility/master-divisi/table-master-divisi";
import { getAllMasterDivisi } from "../../../application/actions/masterdivisi";

const MasterDivisi = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterDivisi);
    document.title = "Master Divisi";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/utility/master-divisi">Utility</Link>
        </li>
        <li className="breadcrumb-item active">Master Divisi</li>
      </ol>
      <h1 className="page-header">
        Master <small>Divisi</small>
      </h1>
      <Panel>
        <PanelHeader>Master Divisi</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterDivisi />
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
                  Tabel Master Divisi
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterDivisi />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterDivisi;
