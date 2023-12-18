import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
} from "./../../components/panel/panel.jsx";
import { Card, Divider, Button } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllMasterJenisBahan } from "../../../application/actions/masterjenisbahan";
import FormKirimBatu from "../../components/admin-pusat/kirim-batu/button-add-kirim-batu";
import TableKirimBatu from "../../components/admin-pusat/kirim-batu/table-kirim-batu";
import { getAllSaldoBahanStock } from "../../../application/actions/pembuatanjenisbahan";
import { getAllDivisi } from "../../../application/actions/kirimbahanadmin";
import service from "../../../infrastructure/services/index";
import {
  checkoutKirimBatu,
  getAllJOKirimBatuPusat,
} from "../../../application/actions/kirimbatupusat.jsx";

const KirimBatu = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterJenisBahan);
    dispatch(getAllSaldoBahanStock);
    dispatch(getAllDivisi);
    if (service.getLocal("data_jo_kirim_batu_head") !== null) {
      dispatch(
        getAllJOKirimBatuPusat({
          noJO: service.getLocal("data_jo_kirim_batu_head").no_job_order,
        })
      );
    }
    document.title = "Kirim Batu";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-pusat/kirim-batu">Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Batu</li>
      </ol>
      <h1 className="page-header">
        Admin Pusat <small>Kirim Batu</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Batu</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimBatu />
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
                  Tabel Kirim Batu
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimBatu />
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
                  dispatch(checkoutKirimBatu);
                }}
              >
                Simpan
              </Button>
            </div>
            <div className="col-1">
              <Button
                type="danger"
                onClick={() => {
                  localStorage.removeItem("data_jo_kirim_batu_head");
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

export default KirimBatu;
