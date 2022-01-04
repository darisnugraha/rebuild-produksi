import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllLaporanTerimaPotong } from "../../../../../application/actions/laporanterimapotong";

const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanTerimaPotong?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTerimaPotong?.values.date,
        no_pohon: state.form.FormLaporanTerimaPotong?.values.no_pohon,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        no_pohon: "",
      },
    };
  }
};

let FormLaporanTerimaPotong = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
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
          <Field
            name="no_pohon"
            label={<span style={{ fontSize: "13px" }}>No Pohon</span>}
            style={{ width: 250 }}
            component={styleAntd.AInput}
            placeholder="Masukkan No Pohon"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanTerimaPotong)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaPotong = reduxForm({
  form: "FormLaporanTerimaPotong",
  enableReinitialize: true,
})(FormLaporanTerimaPotong);
export default connect(maptostate, null)(FormLaporanTerimaPotong);
