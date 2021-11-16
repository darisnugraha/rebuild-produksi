import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import ui from "../../../../application/selectors/ui";
import ExcelReport from "./excel/excelReport";
import pdfReport from "./pdf/pdfReport";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";

const BtnPrint = () => {
  const btnLoading = useSelector(ui.getBtnLoading);

  const pdfExportHandle = () => {
    pdfReport([]);
  };

  return (
    <Row style={{ marginTop: 15 }}>
      <Col span={10} style={{ marginTop: 10 }}>
        <ExcelReport dataExel={[]} />
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
