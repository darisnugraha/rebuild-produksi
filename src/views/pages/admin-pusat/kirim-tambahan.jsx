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
import FormKirimTambahan from "../../components/admin-pusat/kirim-tambahan/button-add-kirim-tambahan";
import TableKirimTambahan from "../../components/admin-pusat/kirim-tambahan/table-kirim-tambahan";
import { getAllDivisi } from "../../../application/actions/kirimbahanadmin";
import {
  getAllAsalStockBahan,
  // addKirimTambahanDivisi,
  deleteKirimTambahanCart,
  addKirimTambahanCheckout,
} from "../../../application/actions/kirimtambahan.jsx";

const KirimTambahan = () => {
  const dispatch = useDispatch();
  // const data = JSON.parse(localStorage.getItem("divisi_detail_tambahan"));
  // const getDataDivisiKirimTambahan = (val) => {
  //   if (val !== null) {
  //     dispatch(addKirimTambahanDivisi);
  //   } else {
  //     return false;
  //   }
  // };
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllDivisi);
    dispatch(getAllAsalStockBahan);
    document.title = "Kirim Tambahan";
    /* eslint-disable-next-line */
    // getDataDivisiKirimTambahan(data);
    /* eslint-disable-next-line */
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-pusat/kirim-tambahan">Admin Pusat</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Tambahan</li>
      </ol>
      <h1 className="page-header">
        Admin Pusat <small>Kirim Tambahan</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Tambahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimTambahan />
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
                  Tabel Kirim Tambahan
                </Divider>
              </div>
              <div className="col-12">
                <TableKirimTambahan />
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
                  dispatch(addKirimTambahanCheckout);
                }}
              >
                Simpan
              </Button>
            </div>
            <div className="col-1">
              <Button
                type="danger"
                onClick={() => {
                  dispatch(deleteKirimTambahanCart);
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

export default KirimTambahan;
