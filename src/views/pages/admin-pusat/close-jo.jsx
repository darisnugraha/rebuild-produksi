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
import FormCloseJO from "../../components/admin-pusat/close-jo/button-close-jo";
import { useLocation } from "react-router";
import {
  addCloseJO,
  getNoIndukJobOrder,
} from "../../../application/actions/closejo.jsx";
import TableCloseJO from "../../components/admin-pusat/close-jo/table-close-jo.jsx";

const CloseJO = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getNoIndukJobOrder);
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
              <div className="col-12" style={{ paddingTop: 10 }}>
                <TableCloseJO />
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
                  dispatch(addCloseJO);
                }}
              >
                Simpan
              </Button>
            </div>
            <div className="col-1">
              <Button
                type="danger"
                onClick={() => {
                  localStorage.removeItem("close_jo_head");
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

export default CloseJO;
