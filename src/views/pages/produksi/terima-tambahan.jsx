import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import FormTerimaTambahan from "../../components/produksi/terima-tambahan/button-terima-tambahan";
import { useLocation } from "react-router";
import routes from "../../../infrastructure/config/page-route.jsx";
import { getAllMasterTukang } from "../../../application/actions/mastertukang.jsx";

const TerimaTambahan = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();
  const [pageTitleDisplay, setTitle] = useState("");

  const PageTitle = useCallback((pathLocation, route) => {
    let dataLocation = route.filter((list) => {
      return list.path === pathLocation.pathname;
    });
    setTitle(dataLocation[0].menu);
    localStorage.setItem("divisi", dataLocation[0].divisi);
    document.title = dataLocation[0].menu + " Terima Tambahan";
  }, []);

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterTukang);
    /* eslint-disable-next-line */
    PageTitle(locationLink, routes);
    /* eslint-disable-next-line */
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={locationLink}>{pageTitleDisplay}</Link>
        </li>
        <li className="breadcrumb-item active">Terima Tambahan</li>
      </ol>
      <h1 className="page-header">
        {pageTitleDisplay} <small>Terima Tambahan</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Tambahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaTambahan />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaTambahan;
