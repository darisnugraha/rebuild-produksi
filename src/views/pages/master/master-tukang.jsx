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
import FormMasterTukang from "../../components/master/master-tukang/button-add-master-tukang";
import TableMasterTukang from "../../components/master/master-tukang/table-master-tukang";
import { getAllMasterTukang } from "../../../application/actions/mastertukang.jsx";

const MasterTukang = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterTukang);
    document.title = "Master Tukang";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/tukang">Master</Link>
        </li>
        <li className="breadcrumb-item active">Tukang</li>
      </ol>
      <h1 className="page-header">
        Master <small>Tukang</small>
      </h1>
      <Panel>
        <PanelHeader>Master Tukang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterTukang />
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
                  Tabel Master Tukang
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterTukang />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterTukang;
