import React, { useEffect } from "react";
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
import FormBatalJO from "../../components/admin-pusat/batal-proses-jo/button-batal-proses-jo";
import { useLocation } from "react-router";
import TableBatalProsesJO from "../../components/admin-pusat/batal-proses-jo/table-batal-proses-jo.jsx";
import { postDataBatalProsesJO } from "../../../application/actions/batalprosesjo.jsx";

const BatalProsesJO = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();

  useEffect(() => {
    dispatch(pageLoadedLogin);
    document.title = "Batal Proses JO";
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
        <li className="breadcrumb-item active">Batal Proses JO</li>
      </ol>
      <h1 className="page-header">
        Admin Pusat <small>Batal Proses JO</small>
      </h1>
      <Panel>
        <PanelHeader>Batal Proses JO</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormBatalJO />
              </div>
              <div className="col-12" style={{ paddingTop: 10 }}>
                <TableBatalProsesJO />
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
                  dispatch(postDataBatalProsesJO);
                }}
              >
                Simpan
              </Button>
            </div>
            <div className="col-1">
              <Button
                type="danger"
                onClick={() => {
                  localStorage.removeItem("batal_proses_jo");
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

export default BatalProsesJO;
