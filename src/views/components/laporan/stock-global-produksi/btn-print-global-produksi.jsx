import React from "react";
import { useSelector, connect } from "react-redux";
import { Button, Row, Col } from "antd";
import ui from "../../../../application/selectors/ui";
import ExcelReport from "./excel/excelReport";
import ExcelReportR from "./excel/excelReportR";
import laporanStockGlobalProduksi from "../../../../application/selectors/laporanstockglobalproduksi";
import pdfReport from "./pdf/pdfReport";
import pdfReportR from "./pdf/pdfReportR";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";

const BtnPrint = () => {

  const datalapL = useSelector(
    laporanStockGlobalProduksi.getAllLaporanStockGlobalProduksiL
  );
  const datalapR = useSelector(
    laporanStockGlobalProduksi.getAllLaporanStockGlobalProduksiR
  );
  const typeTable = useSelector(ui.getTypeTableLayout);

  function pdfExportHandle() {
    if (typeTable === "L") {
      pdfReport(datalapL);
    } else {
      pdfReportR(datalapR);
    }
  }

  return (
    <Row>
      <Col span={10} style={{ marginTop: 10 }}>
        {typeTable === "L" ? (
          <ExcelReport dataExel={datalapL} />
        ) : (
          <ExcelReportR dataExel={datalapR} />
        )}
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
