import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
} from "./../../components/panel/panel.jsx";
import { Button, Card, Divider } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import FormKirimJO from "../../components/job-order/button-kirim-jo";
import { useLocation } from "react-router";
import routes from "../../../infrastructure/config/page-route.jsx";
import { getAllDivisi } from "../../../application/actions/kirimbahanadmin.jsx";
import { getAllMasterTukang } from "../../../application/actions/mastertukang.jsx";
import { getAllMasterBahan } from "../../../application/actions/masterbahan.jsx";
import { getAllMasterBatu } from "../../../application/actions/masterbatu.jsx";
import TableKirimJO from "../../components/job-order/table-kirim-jo.jsx";
import {
  addLocalTambahan,
  getNoIndukJobOrder,
} from "../../../application/actions/kirimjo.jsx";

const KirimJO = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();
  const [pageTitleDisplay, setTitle] = useState("");

  const PageTitle = useCallback((pathLocation, route) => {
    let dataLocation = route.filter((list) => {
      return list.path === pathLocation.pathname;
    });
    setTitle(dataLocation[0].menu);
    if (dataLocation[0].divisi === "Admin") {
      localStorage.setItem("divisi", dataLocation[0].divisi.toUpperCase());
    } else {
      localStorage.setItem("divisi", dataLocation[0].divisi);
    }
    document.title = dataLocation[0].menu + " Kirim JO";
  }, []);

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    dispatch(getAllMasterTukang);
    dispatch(getAllMasterBahan);
    dispatch(getAllMasterBatu);
    dispatch(getNoIndukJobOrder);
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
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel Job Order
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimJO />
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
                  dispatch(addLocalTambahan);
                }}
              >
                Simpan
              </Button>
            </div>
            <div className="col-1">
              <Button
                type="danger"
                onClick={() => {
                  localStorage.removeItem("kirim_jo_head");
                  localStorage.removeItem("detail_batu");
                  localStorage.removeItem("detail_tambahan");
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

export default KirimJO;
