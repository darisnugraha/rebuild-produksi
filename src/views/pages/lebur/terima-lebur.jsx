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
import FormTerimaLebur from "../../components/lebur/terima-lebur/button-terima-lebur";
import { useLocation } from "react-router";

const TerimaLebur = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();

  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Terima Lebur";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={locationLink}>Lebur</Link>
        </li>
        <li className="breadcrumb-item active">Terima Lebur</li>
      </ol>
      <h1 className="page-header">
        Lebur <small>Terima Lebur</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Lebur</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaLebur />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaLebur;
