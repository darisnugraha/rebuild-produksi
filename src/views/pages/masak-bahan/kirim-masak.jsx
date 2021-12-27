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
import FormKirimMasak from "../../components/masak-bahan/kirim-masak/button-add-kirim-masak";
import TableKirimMasak from "../../components/masak-bahan/kirim-masak/table-kirim-masak";
import TableHistoryKirimMasak from "../../components/masak-bahan/kirim-masak/table-history-kirim-masak";
import {
  addKirimMasak,
  getAllHistoryKirimMasak,
} from "../../../application/actions/kirimmasak.jsx";

const KirimMasak = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllHistoryKirimMasak);
    document.title = "Kirim Masak";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/masak/kirim-masak">Masak</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Masak</li>
      </ol>
      <h1 className="page-header">
        Masak <small>Kirim Masak</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Masak</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimMasak />
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
                  Tabel Kirim Masak
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimMasak />
              </div>
              <div className="col-12" style={{ marginTop: "10px" }}>
                <div className="row">
                  <div className="col-1">
                    <Button
                      type="primary"
                      onClick={() => {
                        dispatch(addKirimMasak);
                      }}
                    >
                      Simpan
                    </Button>
                  </div>
                  <div className="col-1">
                    <Button
                      type="danger"
                      onClick={() => {
                        localStorage.removeItem("data_kirim_masak");
                        window.location.reload();
                      }}
                    >
                      Batal
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Divider orientation="left" style={{ fontSize: "14px" }}>
                  Tabel History Kirim Masak
                </Divider>
              </div>
              <div className="col-12">
                <TableHistoryKirimMasak />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimMasak;
