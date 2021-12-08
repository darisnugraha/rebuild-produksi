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
import { getAllMasterTukang } from "../../../application/actions/mastertukang";
import { getAllMasterBahan } from "../../../application/actions/masterbahan";
import { getAllMasterMarketing } from "../../../application/actions/mastermarketing";
import { getAllMasterCustomer } from "../../../application/actions/mastercustomer";
import { getAllMasterOriginal } from "../../../application/actions/masteroriginal";
import { getAllMasterJenisBahan } from "../../../application/actions/masterjenisbahan";
import FormTambahJO from "../../components/admin-pusat/tambah-jo/button-add-tambah-jo";
import TableTambahJO from "../../components/admin-pusat/tambah-jo/table-tambah-jo";

const TambahJO = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterTukang);
    dispatch(getAllMasterBahan);
    dispatch(getAllMasterMarketing);
    dispatch(getAllMasterCustomer);
    dispatch(getAllMasterOriginal);
    dispatch(getAllMasterJenisBahan);

    document.title = "Tambah Job Order";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/pembuatan-jenis-bahan">Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Tambah Job Order</li>
      </ol>
      <h1 className="page-header">
        Admin Pusat <small>Tambah Job Order</small>
      </h1>
      <Panel>
        <PanelHeader>Tambah Job Order</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormTambahJO />
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
                  Tabel Tambah Job Order
                </Divider>
              </div>
              <div className="col-12">
                <TableTambahJO />
              </div>
            </div>
          </Card>
        </PanelBody>
        <PanelFooter>
          <div className="row">
            <div className="col-1">
              <Button type="primary">Simpan</Button>
            </div>
            <div className="col-1">
              <Button
                type="danger"
                onClick={() => {
                  localStorage.removeItem("data_detail_jo");
                  localStorage.removeItem("data_staff");
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

export default TambahJO;
