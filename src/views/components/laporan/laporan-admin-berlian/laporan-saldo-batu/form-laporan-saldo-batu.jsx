import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { reduxForm } from "redux-form";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllLaporanSaldoBatu } from "../../../../../application/actions/laporansaldobatu";

let FormLaporanSaldoBatu = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);

  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanSaldoBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSaldoBatu = reduxForm({
  form: "FormLaporanSaldoBatu",
  enableReinitialize: true,
})(FormLaporanSaldoBatu);
export default connect("", null)(FormLaporanSaldoBatu);
