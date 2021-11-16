import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import { getAllStockAdmin } from "../../../../application/actions/stockadmin";
import "antd/dist/antd.css";

const dateFormat = "MM/YYYY";
const today = new Date();
const { Option } = Select;

const FormLaporanStockAdmin = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="jenis_bahan"
            label={<span style={{ fontSize: "13px" }}>Jenis Bahan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Jenis Bahan"
            defaultValue="all"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="all">
              <span style={{ fontSize: "13px" }}>SEMUA</span>
            </Option>
            <Option value="eay18">
              <span style={{ fontSize: "13px" }}>EAY 18</span>
            </Option>
            <Option value="eay14">
              <span style={{ fontSize: "13px" }}>EAY 14</span>
            </Option>
            <Option value="eay10">
              <span style={{ fontSize: "13px" }}>EAY 10</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllStockAdmin)}
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
  form: "FormLaporanStockAdmin",
  initialValues: {
    jenis_bahan: "all",
  },
})(FormLaporanStockAdmin);
