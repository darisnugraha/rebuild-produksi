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
import FormMasterKelompokJenisBahan from "../../components/master/master-bill-of-materials/button-add-master-bill-of-materials";
import TableMasterKelompokJenisBahan from "../../components/master/master-bill-of-materials/table-master-bill-of-materials";
import { getAllMasterKelompokJenisBahan } from "../../../application/actions/masterkelompokjenisbahan.jsx";
import { getAllMasterBillOfMaterials } from "../../../application/actions/masterbillofmaterials.jsx";
import { getAllMasterBahan } from "../../../application/actions/masterbahan";

const MasterJenisBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterKelompokJenisBahan);
    dispatch(getAllMasterBillOfMaterials);
    dispatch(getAllMasterBahan);
    document.title = "Master Bill Of Materials";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/bill-of-materials">Master</Link>
        </li>
        <li className="breadcrumb-item active">Bill Of Materials</li>
      </ol>
      <h1 className="page-header">
        Master <small>Bill Of Materials</small>
      </h1>
      <Panel>
        <PanelHeader>Master Bill Of Materials</PanelHeader>
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
                  Tabel Master Bill Of Materials
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
