import React from "react";
import { connect, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllLaporanSetorAbuPotong } from "../../../../../application/actions/laporansetorabupotong";

const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanSetorAbuPotong?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanSetorAbuPotong?.values.date,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
      },
    };
  }
};

let FormLaporanSetorAbuPotong = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
            component={styleAntd.ARangePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanSetorAbuPotong)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSetorAbuPotong = reduxForm({
  form: "FormLaporanSetorAbuPotong",
  enableReinitialize: true,
})(FormLaporanSetorAbuPotong);
export default connect(maptostate, null)(FormLaporanSetorAbuPotong);
