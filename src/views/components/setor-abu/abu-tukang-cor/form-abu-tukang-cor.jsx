import React from "react";
import { Form, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import "antd/dist/antd.css";
import { connect } from "react-redux";

const maptostate = (state) => {
  const data = JSON.parse(localStorage.getItem("data_select")) || [];
  if (data.length !== 0) {
    return {
      initialValues: {
        k_24: undefined,
      },
    };
  } else {
    return {
      initialValues: {
        k_24: undefined,
      },
    };
  }
};

let FormAbuTukangCOR = (prop) => {
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="bahan_kembali"
            type="text"
            addonBefore={
              <span style={{ fontSize: "13px" }}>Bahan Kembali</span>
            }
            component={styleAntd.AInput}
            style={{ width: 300 }}
            className="form-item-group"
            placeholder="Masukkan Bahan Kembali"
          />
        </Col>
        <Col offset={1}>
          <Field
            name="berat_kotor_kembali"
            type="text"
            addonBefore={
              <span style={{ fontSize: "13px" }}>Berat Kotor Kembali</span>
            }
            component={styleAntd.AInput}
            style={{ width: 300 }}
            className="form-item-group"
            placeholder="Masukkan Berat Kotor Kembali"
          />
        </Col>
        <Col offset={1}>
          <Field
            name="susut_bruto"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>Susut Bruto</span>}
            component={styleAntd.AInput}
            style={{ width: 300 }}
            className="form-item-group"
            placeholder="Masukkan Susut Bruto"
            disabled
          />
        </Col>
        <Col offset={1}>
          <Field
            name="kadar"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>Kadar</span>}
            component={styleAntd.AInput}
            style={{ width: 300 }}
            className="form-item-group"
            placeholder="Masukkan Kadar"
          />
        </Col>
        <Col offset={1}>
          <Field
            name="k_24"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>24K</span>}
            component={styleAntd.AInput}
            style={{ width: 300 }}
            className="form-item-group"
            placeholder="Masukkan 24K"
            disabled
          />
        </Col>
        <Col offset={1}>
          <Field
            name="susut_24k"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>Susut 24K</span>}
            component={styleAntd.AInput}
            style={{ width: 300 }}
            className="form-item-group"
            placeholder="Masukkan Susut 24K"
          />
        </Col>
      </Row>
    </Form>
  );
};

FormAbuTukangCOR = reduxForm({
  form: "FormAbuTukangCOR",
  enableReinitialize: true,
})(FormAbuTukangCOR);
export default connect(maptostate, null)(FormAbuTukangCOR);
