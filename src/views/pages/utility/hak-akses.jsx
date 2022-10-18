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
import HakAksesTree from "../../components/utility/hak-akses/hak-akses-tree.jsx";
import { getAllMasterUser } from "../../../application/actions/masteruser.jsx";
// import FormMasterDivisi from "../../components/utility/master-divisi/button-add-master-divisi";
// import TableMasterDivisi from "../../components/utility/master-divisi/table-master-divisi";
// import { getAllMasterDivisi } from "../../../application/actions/masterdivisi";

const HakAksesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterUser);
    // dispatch(getAllMasterDivisi);
    document.title = "Hak Akses";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/utility/hak-akses">Utility</Link>
        </li>
        <li className="breadcrumb-item active">Hak Akses</li>
      </ol>
      <h1 className="page-header">
        Hak Akses <small>User</small>
      </h1>
      <Panel>
        <PanelHeader>Hak Akses</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">{/* <FormMasterDivisi /> */}</div>
            </div>
            <div
              className="row"
              style={{
                marginTop: 10,
              }}
            >
              <div className="col-12">
                <HakAksesTree />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default HakAksesPage;
