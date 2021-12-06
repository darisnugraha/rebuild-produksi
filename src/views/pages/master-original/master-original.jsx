import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import TableMasterOriginal from "../../components/master-original/table-master-original";
import { getAllMasterOriginal } from "../../../application/actions/masteroriginal.jsx";

const MasterOriginal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterOriginal);
    document.title = "Master Original";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/master/original">Master</Link>
        </li>
        <li className="breadcrumb-item active">Original</li>
      </ol>
      <h1 className="page-header">
        Master <small>Original</small>
      </h1>
      <Panel>
        <PanelHeader>Master Original</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <TableMasterOriginal />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterOriginal;
