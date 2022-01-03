import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import ui from "../../../../../application/selectors/ui";
import PembuatanJenisBahan from "../../../../../application/selectors/laporanpembuatanjenisbahan";
import ExcelReport from "./excel/excelReport";
import pdfReport from "./pdf/pdfReport";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataPembuatanJenisBahan = useSelector(
    PembuatanJenisBahan.getAllLaporanPembuatanJenisBahan
  );
  const datahead = JSON.parse(
    localStorage.getItem("laporan_pembuatan_jenis_bahan")
  );

  const pdfExportHandle = () => {
    pdfReport(dataPembuatanJenisBahan);
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        <ExcelReport dataExel={dataPembuatanJenisBahan} dataHead={datahead} />
      </Col>
      <Col htmltype="button" span={10} style={{ marginTop: 10 }} offset={2}>
        <Button
          type="primary"
          htmltype="button"
          block
          danger
          onClick={() => pdfExportHandle()}
        >
          Print To PDF
        </Button>
      </Col>
    </Row>
  );
};

export default connect()(BtnPrint);
