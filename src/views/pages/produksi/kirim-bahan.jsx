import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  Panel,
  PanelHeader,
  PanelBody,
} from "./../../components/panel/panel.jsx";
import { Card } from "antd";
import { pageLoadedLogin } from "../../../application/actions/ui";
import FormKirimBahanProduksi from "../../components/produksi/kirim-bahan/button-kirim-bahan";
import { useLocation } from "react-router";
import {
  // getAllStaffStockBahanDivisi,
  getAllStockBahanDivisi,
} from "../../../application/actions/kirimbahanadminpusat.jsx";
import routes from "../../../infrastructure/config/page-route.jsx";
import { getAllMasterTukang } from "../../../application/actions/mastertukang.jsx";

const KirimBahanProduksi = () => {
  const dispatch = useDispatch();
  let locationLink = useLocation();
  const [pageTitleDisplay, setTitle] = useState("");

  const PageTitle = useCallback((pathLocation, route) => {
    let dataLocation = route.filter((list) => {
      return list.path === pathLocation.pathname;
    });
    setTitle(dataLocation[0].menu);
    localStorage.setItem("divisi", dataLocation[0].divisi);
    document.title = dataLocation[0].menu + " Kirim Bahan";
  }, []);

  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getAllStockBahanDivisi);
    dispatch(getAllMasterTukang);
    // dispatch(getAllStaffStockBahanDivisi);
    /* eslint-disable-next-line */
    PageTitle(locationLink, routes);
    /* eslint-disable-next-line */
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={locationLink}>{pageTitleDisplay}</Link>
        </li>
        <li className="breadcrumb-item active">Kirim Bahan</li>
      </ol>
      <h1 className="page-header">
        {pageTitleDisplay} <small>Kirim Bahan</small>
      </h1>
      <Panel>
        <PanelHeader>Kirim Bahan</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormKirimBahanProduksi />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default KirimBahanProduksi;
