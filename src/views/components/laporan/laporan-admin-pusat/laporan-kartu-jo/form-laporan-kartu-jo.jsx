import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllKartuJo } from "../../../../../application/actions/laporankartujoborder";

const maptostate = (state) => {
  if (state.form.FormLaporanKartuJo?.values !== undefined) {
    return {
      initialValues: {
        no_job_order: state.form.FormLaporanKartuJo?.values.no_job_order,
      },
    };
  } else {
    return {
      initialValues: {
        no_job_order: "",
      },
    };
  }
};

let FormLaporanKartuJo = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);

  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="no_job_order"
            label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
            style={{ width: 250 }}
            component={styleAntd.AInput}
            placeholder="Masukkan No Job Order"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKartuJo)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanKartuJo = reduxForm({
  form: "FormLaporanKartuJo",
  enableReinitialize: true,
})(FormLaporanKartuJo);
export default connect(maptostate, null)(FormLaporanKartuJo);
