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
import FormCloseJO from "../../components/admin-pusat/close-jo/button-close-jo";
import { useLocation } from "react-router";

const CloseJO = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();

  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Close JO";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={locationLink}>Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Close JO</li>
      </ol>
      <h1 className="page-header">
        Admin Pusat <small>Close JO</small>
      </h1>
      <Panel>
        <PanelHeader>Close JO</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormCloseJO />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default CloseJO;
