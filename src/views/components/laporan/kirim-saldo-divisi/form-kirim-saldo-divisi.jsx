import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllKirimsaldodivisi } from "../../../../application/actions/kirimsaldodivisi";

const dateFormat = "MM/YYYY";
const today = new Date();
const { Option } = Select;

const FormLaporanKirimSaldoDivisi = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Bulan</span>}
            component={styleAntd.ADatePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
            defaultValue={moment(today, dateFormat)}
            picker="month"
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllKirimsaldodivisi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: "FormLaporanKirimSaldoDivisi",
  initialValues: {
    date: moment(today, dateFormat),
  },
})(FormLaporanKirimSaldoDivisi);
