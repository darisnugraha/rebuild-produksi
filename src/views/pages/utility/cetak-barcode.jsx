import React, { useEffect } from "react";
import { Card } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { pageLoadedLogin } from "../../../application/actions/ui";
import { Panel, PanelBody, PanelHeader } from "../../components/panel/panel";
import FormCetakBarcode from "../../components/utility/cetak-barcode/form-cetak-barcode";
import { getNoIndukJobOrder } from "../../../application/actions/cetakbarcode";

const CetakBarcode = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pageLoadedLogin);
    dispatch(getNoIndukJobOrder);
    document.title = "Cetak Barcode";
  }, [dispatch]);

  return (
    <div>
      <ol className="breadcrumb float-xl-right">
        <li className="breadcrumb-item">
          <Link to="/dashboard">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/utility/cetak-barcode">Utility</Link>
        </li>
        <li className="breadcrumb-item active">Cetak Barcode</li>
      </ol>
      <h1 className="page-header">
        Cetak Barcode <small>Utility</small>
      </h1>
      <Panel>
        <PanelHeader>Cetak Barcode</PanelHeader>
        <PanelBody>
          <Card bordered={false}>
            <div className="row">
              <div className="col-12">
                <FormCetakBarcode />
              </div>
            </div>
          </Card>
        </PanelBody>
      </Panel>
    </div>
  );
};

export default CetakBarcode;
