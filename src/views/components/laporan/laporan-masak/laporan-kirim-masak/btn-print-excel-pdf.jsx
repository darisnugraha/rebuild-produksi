import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import ui from "../../../../../application/selectors/ui";
import KirimMasak from "../../../../../application/selectors/laporanmasak";
import ExcelReport from "./excel/excelReport";
import pdfReport from "./pdf/pdfReport";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";

const BtnPrint = () => {
  // eslint-disable-next-line
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataKirimMasak = useSelector(KirimMasak.getAllLaporanKirimMasak);
  const datahead = JSON.parse(localStorage.getItem("laporan_kirim_masak"));

  const pdfExportHandle = () => {
    pdfReport(dataKirimMasak);
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        <ExcelReport dataExel={dataKirimMasak} dataHead={datahead} />
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
