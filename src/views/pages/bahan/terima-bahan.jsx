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
import FormTerimaBahan from "../../components/bahan/button-terima-bahan";
import { useLocation } from "react-router";
import routes from "../../../infrastructure/config/page-route.jsx";
import { getAllMasterTukang } from "../../../application/actions/mastertukang.jsx";
import { getTukangByDivisiPusat } from "../../../application/actions/terimabahan.jsx";

const TerimaBahan = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();
  const [pageTitleDisplay, setTitle] = useState("");

  const PageTitle = useCallback((pathLocation, route) => {
    let dataLocation = route.filter((list) => {
      return list.path === pathLocation.pathname;
    });
    setTitle(dataLocation[0].menu);
    localStorage.setItem("divisi", dataLocation[0].divisi);
    document.title = dataLocation[0].menu + " Terima Bahan";
  }, []);

  useEffect(() => {
    dispatch(getAllMasterTukang);
    dispatch(getTukangByDivisiPusat("ADMIN PUSAT"));
    dispatch(pageLoadedLogin);
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
        <li className="breadcrumb-item active">Terima Bahan</li>
      </ol>
      <h1 className="page-header">
        {pageTitleDisplay} <small>Terima Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaBahan />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaBahan;
