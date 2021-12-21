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
import { getAllMasterBahan } from "../../../application/actions/masterbahan";
import FormTerimaMasak from "../../components/masak-bahan/terima-masak/button-terima-masak";
import { useLocation } from "react-router";

const TerimaMasak = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterBahan);
    document.title = "Terima Masak";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={locationLink}>Masak Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Terima Masak</li>
      </ol>
      <h1 className="page-header">
        Masak Bahan <small>Terima Masak</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Masak</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaMasak />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaMasak;
