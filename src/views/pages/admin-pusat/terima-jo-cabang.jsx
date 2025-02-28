import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
} from "./../../components/panel/panel.jsx";
import { Button, Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import FormTerimaJOCabang from "../../components/admin-pusat/terima-jo-cabang/button-terima-jo-cabang.jsx";
import { useLocation } from "react-router";
import routes from "../../../infrastructure/config/page-route.jsx";
import {
  addTerimaJO,
  getAllCabang,
  getTukangByDivisi,
} from "../../../application/actions/terimajocabang.jsx";
import TableTerimaJOCabang from "../../components/admin-pusat/terima-jo-cabang/table-terima-jo-cabang.jsx";

const TerimaJOCabang = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();
  const [pageTitleDisplay, setTitle] = useState("");

  const PageTitle = useCallback((pathLocation, route) => {
    let dataLocation = route.filter((list) => {
      return list.path === pathLocation.pathname;
    });
    setTitle(dataLocation[0].menu);
    localStorage.setItem("divisi", dataLocation[0].divisi);
    document.title = dataLocation[0].menu + " Terima JO";
  }, []);

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllCabang);
    dispatch(getTukangByDivisi("ADMIN PUSAT"));
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
        <li className="breadcrumb-item active">Terima JO Cabang</li>
      </ol>
      <h1 className="page-header">
        {pageTitleDisplay} <small>Terima JO Cabang</small>
      </h1>
      <Panel>
        <PanelHeader>Terima JO Cabang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaJOCabang />
              </div>
              <div className="col-12" style={{ paddingTop: 10 }}>
                <TableTerimaJOCabang />
              </div>
            </div>
          </Card>
        </PanelBody>
        <PanelFooter>
          <div className="row">
            <div className="col-1">
              <Button
                type="primary"
                onClick={() => {
                  dispatch(addTerimaJO);
                }}
              >
                Simpan
              </Button>
            </div>
            <div className="col-1">
              <Button
                type="danger"
                onClick={() => {
                  localStorage.removeItem("terima_jo_head_cabang");
                  window.location.reload();
                }}
              >
                Batal
              </Button>
            </div>
          </div>
        </PanelFooter>
      </Panel>
    </div>
  );
};

export default TerimaJOCabang;
