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
import FormKirimLebur from "../../components/lebur/kirim-lebur/button-add-kirim-lebur";
import TableKirimLebur from "../../components/lebur/kirim-lebur/table-kirim-lebur";
import TableHistoryKirimLebur from "../../components/lebur/kirim-lebur/table-history-kirim-lebur";
import { getAllHistoryKirimLebur } from "../../../application/actions/kirimlebur.jsx";

const KirimLebur = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllHistoryKirimLebur);
    document.title = "Kirim Lebur";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/lebur/kirim-lebur">Lebur</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Lebur</li>
      </ol>
      <h1 className="page-header">
        Lebur <small>Kirim Lebur</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Lebur</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimLebur />
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
                  Tabel Kirim Lebur
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimLebur />
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
                        localStorage.removeItem("data_kirim_batu_produksi");
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
                  Tabel History Kirim Lebur
                </Divider>
              </div>
              <div className="col-12">
                <TableHistoryKirimLebur />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimLebur;
