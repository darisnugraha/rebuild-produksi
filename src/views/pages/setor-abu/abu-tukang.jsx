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
import { getAllMasterTukang } from "../../../application/actions/mastertukang";
import ButtonAbuTukang from "../../components/setor-abu/abu-tukang/button-abu-tukang";
import TableAbuTukang from "../../components/setor-abu/abu-tukang/table-abu-tukang";
import FormAbuTukang from "../../components/setor-abu/abu-tukang/form-abu-tukang.jsx";
import { getAllDivisi } from "../../../application/actions/kirimbahanadmin.jsx";

const AbuTukang = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    dispatch(getAllMasterTukang);
    document.title = "Abu Tukang";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/setor-abu/abu-tukang">Setor Abu</Link>
        </li>
        <li className="breadcrumb-item active">Abu Tukang</li>
      </ol>
      <h1 className="page-header">
        Setor Abu <small>Abu Tukang</small>
      </h1>
      <Panel>
        <PanelHeader>Abu Tukang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <ButtonAbuTukang />
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
                  Tabel Abu Tukang
                </Divider>
              </div>
              <div className="col-12">
                <TableAbuTukang />
              </div>
              <div className="col-12" style={{ marginTop: "10px" }}>
                <FormAbuTukang />
              </div>
              <div className="col-12" style={{ marginTop: "10px" }}>
                <div className="row">
                  <div className="col-1">
                    <Button type="primary">Simpan</Button>
                  </div>
                  <div className="col-1">
                    <Button
                      type="danger"
                      onClick={() => {
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

export default AbuTukang;
