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
import FormMasterUkuran from "../../components/master/master-ukuran/button-add-master-ukuran";
import TableMasterUkuran from "../../components/master/master-ukuran/table-master-ukuran";
import { getAllMasterUkuran } from "../../../application/actions/masterukuran.jsx";

const MasterUkuran = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterUkuran);
    document.title = "Master Ukuran";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/ukuran">Master</Link>
        </li>
        <li className="breadcrumb-item active">Ukuran</li>
      </ol>
      <h1 className="page-header">
        Master <small>Ukuran</small>
      </h1>
      <Panel>
        <PanelHeader>Master Ukuran</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterUkuran />
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
                  Tabel Master Ukuran
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterUkuran />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterUkuran;
