import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import mastertukang from "../../../../../application/selectors/mastertukang";
import "antd/dist/antd.css";
import { getAllLaporanKirimJoAdmin } from "../../../../../application/actions/laporankirimjoadmin";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanKirimJoAdmin?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanKirimJoAdmin?.values.date,
        tukang: state.form.FormLaporanKirimJoAdmin?.values.tukang,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        tukang: state.mastertukang.feedback[0]?.kode_staff,
      },
    };
  }
};

let FormLaporanKirimJoAdmin = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMasterTukang = useSelector(mastertukang.getAllMasterTukang);
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
            name="tukang"
            label={<span style={{ fontSize: "13px" }}>Tukang</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Tukang"
            onBlur={(e) => e.preventDefault()}
          >
            {dataMasterTukang.map((item) => {
              return (
                <Option value={item.kode_staff} key={item.kode_staff}>
                  <span style={{ fontSize: "13px" }}>
                    {item.kode_staff === item.nama_staff
                      ? item.nama_staff
                      : item.nama_staff + " (" + item.kode_staff + ")"}
                  </span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanKirimJoAdmin)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanKirimJoAdmin = reduxForm({
  form: "FormLaporanKirimJoAdmin",
  enableReinitialize: true,
})(FormLaporanKirimJoAdmin);
export default connect(maptostate, null)(FormLaporanKirimJoAdmin);
