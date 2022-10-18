import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "../../components/panel/panel.jsx";
import { Card, Divider } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import FormMasterKelompokJenisBahan from "../../components/master/master-kelompok-jenis-bahan/button-add-master-kelompok-jenis-bahan";
import TableMasterKelompokJenisBahan from "../../components/master/master-kelompok-jenis-bahan/table-master-kelompok-jenis-bahan";
import { getAllMasterKelompokJenisBahan } from "../../../application/actions/masterkelompokjenisbahan.jsx";

const MasterJenisBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterKelompokJenisBahan);
    document.title = "Master Kelompok Jenis Bahan";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/kelompok-jenis-bahan">Master</Link>
        </li>
        <li className="breadcrumb-item active">Kelompok Jenis Bahan</li>
      </ol>
      <h1 className="page-header">
        Master <small>Kelompok Jenis Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Master Kelompok Jenis Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterKelompokJenisBahan />
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
                  Tabel Master Kelompok Jenis Bahan
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterKelompokJenisBahan />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterJenisBahan;
