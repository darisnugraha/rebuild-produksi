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
import FormKirimJO from "../../components/job-order/button-kirim-jo";
import { useLocation } from "react-router";
import routes from "../../../infrastructure/config/page-route.jsx";
import { getAllDivisi } from "../../../application/actions/kirimbahanadmin.jsx";
import { getAllMasterTukang } from "../../../application/actions/mastertukang.jsx";
import { getAllMasterBahan } from "../../../application/actions/masterbahan.jsx";

const KirimJO = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();
  const [pageTitleDisplay, setTitle] = useState("");

  const PageTitle = useCallback((pathLocation, route) => {
    let dataLocation = route.filter((list) => {
      return list.path === pathLocation.pathname;
    });
    setTitle(dataLocation[0].menu);
    localStorage.setItem("divisi", dataLocation[0].divisi);
  }, []);

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    dispatch(getAllMasterTukang);
    dispatch(getAllMasterBahan);
    document.title = "Kirim JO";
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
        <li className="breadcrumb-item active">Kirim JO</li>
      </ol>
      <h1 className="page-header">
        {pageTitleDisplay} <small>Kirim JO</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim JO</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimJO />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimJO;
