import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
} from "./../../components/panel/panel.jsx";
import { Card, Divider, Button, Space } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllMasterJenisBahan } from "../../../application/actions/masterjenisbahan";
import FormPembuatanJenisBahan from "../../components/admin-bahan/pembuatan-jenis-bahan/button-add-pembuatan-jenis-bahan";
import TablePembuatanJenisBahan from "../../components/admin-bahan/pembuatan-jenis-bahan/table-pembuatan-jenis-bahan";
import {
  addPembuatanJenisBahan,
  getAllSaldoBahanStock,
  resetPembuatanJenisBahan,
} from "../../../application/actions/pembuatanjenisbahan.jsx";
import getLocal from "../../../infrastructure/services/local/get-local.jsx";
import Swal from "sweetalert2";

const PembuatanJenisBahan = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllMasterJenisBahan);
    dispatch(getAllSaldoBahanStock);
    document.title = "Pembuatan Jenis Bahan";
  }, [dispatch]);

  const dataJenisBahan = getLocal("data_detail_jenis_bahan");

  const handelReset = () => {
    Swal.fire({
      title: "Reset",
      text: "Apakah Anda Yakin Akan Mengahapus Data Ini ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetPembuatanJenisBahan);
      }
    });
  };

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/pembuatan-jenis-bahan">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Pembuatan Jenis Bahan</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Pembuatan Jenis Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Pembuatan Jenis Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormPembuatanJenisBahan />
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
                  Tabel Pembuatan Jenis Bahan
                </Divider>
              </div>
              <div className="col-12">
                <TablePembuatanJenisBahan />
              </div>
            </div>
          </Card>
        </PanelBody>
        <PanelFooter>
          <Space>
            <Button
              type="primary"
              onClick={() => {
                dispatch(addPembuatanJenisBahan);
              }}
              disabled={
                dataJenisBahan === undefined ||
                dataJenisBahan === null ||
                dataJenisBahan.length === 0
                  ? true
                  : false
              }
            >
              Simpan
            </Button>
            <Button
              type="danger"
              disabled={
                dataJenisBahan === undefined ||
                dataJenisBahan === null ||
                dataJenisBahan.length === 0
                  ? true
                  : false
              }
              onClick={() => {
                handelReset();
              }}
            >
              Reset
            </Button>
          </Space>
        </PanelFooter>
      </Panel>
    </div>
  );
};

export default PembuatanJenisBahan;
