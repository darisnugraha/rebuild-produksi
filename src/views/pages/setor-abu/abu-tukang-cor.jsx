import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card, Divider, Button } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllMasterBatu } from "../../../application/actions/masterbatu";
import ButtonAbuTukangCOR from "../../components/setor-abu/abu-tukang-cor/button-abu-tukang-cor";
import TableAbuTukangCOR from "../../components/setor-abu/abu-tukang-cor/table-abu-tukang-cor";
import FormAbuTukangCor from "../../components/setor-abu/abu-tukang-cor/form-abu-tukang-cor.jsx";
import { addAbuCOR } from "../../../application/actions/abutukangcor.jsx";
import { getAllMasterBahan } from "../../../application/actions/masterbahan.jsx";

const AbuTukangCOR = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterBatu);
    dispatch(getAllMasterBahan);
    document.title = "Abu Tukang COR";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/setor-abu/abu-tukang-cor">Setor Abu</Link>
        </li>
        <li className="breadcrumb-item active">Abu Tukang COR</li>
      </ol>
      <h1 className="page-header">
        Setor Abu <small>Abu Tukang COR</small>
      </h1>
      <Panel>
        <PanelHeader>Abu Tukang COR</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row" style={{ marginLeft: "40%" }}>
              <div className="col-12">
                <ButtonAbuTukangCOR />
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
                  Tabel Abu Tukang COR
                </Divider>
              </div>
              <div className="col-12">
                <TableAbuTukangCOR />
              </div>
              <div className="col-12" style={{ marginTop: "10px" }}>
                <FormAbuTukangCor />
              </div>
              <div className="col-12" style={{ marginTop: "10px" }}>
                <div className="row">
                  <div className="col-1">
                    <Button type="primary" onClick={() => dispatch(addAbuCOR)}>
                      Simpan
                    </Button>
                  </div>
                  <div className="col-1">
                    <Button
                      type="danger"
                      onClick={() => {
                        localStorage.removeItem("data_select");
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

export default AbuTukangCOR;
