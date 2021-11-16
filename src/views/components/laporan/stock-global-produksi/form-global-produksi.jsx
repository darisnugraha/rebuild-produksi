import React from "react";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Radio, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import { getAllLaporanStockGlobalProduksi } from "../../../../application/actions/laporanstockglobalproduksi";
import { setTableLayout } from "../../../../application/actions/ui";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
const today = new Date();

const FormLaporanGlobalProduksi = (prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="date"
            type="date"
            label={<span style={{ fontSize: "13px" }}>Tanggal</span>}
            component={styleAntd.ADatePick}
            className="form-item-group"
            onBlur={(e) => e.preventDefault()}
            defaultValue={moment(today, dateFormat)}
          />
        </Col>
        <Col offset={1}>
          <Field
            name="user"
            label={<span style={{ fontSize: "13px" }}>User</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih User"
            defaultValue="all"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="all">
              <span style={{ fontSize: "13px" }}>Semua</span>
            </Option>
            <Option value="admin1">
              <span style={{ fontSize: "13px" }}>Admin 1</span>
            </Option>
            <Option value="admin2">
              <span style={{ fontSize: "13px" }}>Admin 2</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Field
            name="tipe_laporan"
            label={<span style={{ fontSize: "13px" }}>Tipe Laporan</span>}
            defaultValue="L"
            component={styleAntd.ARadioGroup}
          >
            <Radio value="L" onClick={() => dispatch(setTableLayout("L"))}>
              <span style={{ fontSize: "13px" }}>L</span>
            </Radio>
            <Radio value="R" onClick={() => dispatch(setTableLayout("R"))}>
              <span style={{ fontSize: "13px" }}>R</span>
            </Radio>
          </Field>
        </Col>
        <Col offset={1}>
          <Field
            label={<span style={{ fontSize: "13px" }}>Semua Divisi</span>}
            name="divisi"
            id="divisi"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
        <Col offset={1}>
          <Field
            label={<span style={{ fontSize: "13px" }}>Tanpa Reparasi</span>}
            name="repair"
            id="repair"
            component={styleAntd.ACheckBox}
            type="checkbox"
          />
        </Col>
      </Row>
      <Row>
        <Col offset={21}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanStockGlobalProduksi)}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default reduxForm({
  form: "FormLaporanGlobalProduksi",
  initialValues: {
    date: moment(today, dateFormat),
    user: "all",
    tipe_laporan: "L",
    divisi: false,
    repair: false,
  },
})(FormLaporanGlobalProduksi);
