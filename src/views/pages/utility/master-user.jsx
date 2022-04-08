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
import FormMasterUser from "../../components/utility/master-user/button-add-master-user";
import TableMasterUser from "../../components/utility/master-user/table-master-user";
import { getAllMasterUser } from "../../../application/actions/masteruser";

const MasterUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterUser);
    document.title = "Master User";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/utility/master-user">Utility</Link>
        </li>
        <li className="breadcrumb-item active">Master User</li>
      </ol>
      <h1 className="page-header">
        Master <small>User</small>
      </h1>
      <Panel>
        <PanelHeader>Master User</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormMasterUser />
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
                  Tabel Master User
                </Divider>
              </div>
              <div className="col-12">
                <TableMasterUser />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default MasterUser;
