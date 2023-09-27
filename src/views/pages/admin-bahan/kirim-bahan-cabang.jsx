import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { getAllSaldoBahanStock } from "../../../application/actions/pembuatanjenisbahan";
import FormKirimBahanCabang from "../../components/admin-bahan/kirim-bahan-cabang/button-kirim-bahan-cabang.jsx";
import {
  getAllDivisi,
  getTukangByDivisi,
} from "../../../application/actions/kirimbahancabang.jsx";
import { getAllCabang } from "../../../application/actions/kirimjocabang.jsx";

const KirimBahanCabang = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getTukangByDivisi("ADMIN PUSAT"));
    dispatch(getAllSaldoBahanStock);
    dispatch(getAllDivisi);
    dispatch(getAllCabang);
    document.title = "Kirim Bahan Cabang";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/admin-bahan/kirim-bahan-cabang">Admin Bahan</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Bahan Cabang</li>
      </ol>
      <h1 className="page-header">
        Admin Bahan <small>Kirim Bahan Cabang</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Bahan Cabang</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimBahanCabang />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimBahanCabang;
