import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Button, Card, Divider } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { simpanDataDetailKirimBatuPOST } from "../../../application/actions/terimabatu";
import FormTerimaBatu from "../../components/batu/terima-batu/button-terima-batu";
import { useLocation } from "react-router";
import routes from "../../../infrastructure/config/page-route.jsx";
import TableTerimaBatu from "../../components/batu/terima-batu/table-terima-batu.jsx";

const TerimaBatu = () => {
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
    document.title = "Terima Batu";
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
        <li className="breadcrumb-item active">Terima Batu</li>
      </ol>
      <h1 className="page-header">
        {pageTitleDisplay} <small>Terima Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Terima Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTerimaBatu />
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
                  Tabel Terima Batu
                </Divider>
              </div>
              <div className="col-12">
                <TableTerimaBatu />
              </div>
              <div className="col-12" style={{ marginTop: "10px" }}>
                <div className="row">
                  <div className="col-1">
                    <Button
                      type="primary"
                      onClick={() => {
                        dispatch(simpanDataDetailKirimBatuPOST);
                      }}
                    >
                      Simpan
                    </Button>
                  </div>
                  <div className="col-1">
                    <Button
                      type="danger"
                      onClick={() => {
                        localStorage.removeItem("data_detail_kirim_batu");
                        window.location.reload();
                      }}
                    >
                      Batal
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default TerimaBatu;
