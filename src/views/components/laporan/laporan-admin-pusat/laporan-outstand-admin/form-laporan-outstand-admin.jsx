import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import mastertukang from "../../../../../application/selectors/mastertukang";
import "antd/dist/antd.css";
import { getAllLaporanOutstandAdmin } from "../../../../../application/actions/laporanoutstandadmin";

const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanOutstandAdmin?.values !== undefined) {
    return {
      initialValues: {
        tukang: state.form.FormLaporanOutstandAdmin?.values.tukang,
      },
    };
  } else {
    return {
      initialValues: {
        tukang: state.mastertukang.feedback[0]?.kode_staff,
      },
    };
  }
};

let FormLaporanOutstandAdmin = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMasterTukang = useSelector(mastertukang.getAllMasterTukang);
  return (
    <Form layout="vertical">
      <Row>
        <Col>
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
            onClick={() => prop.dispatch(getAllLaporanOutstandAdmin)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanOutstandAdmin = reduxForm({
  form: "FormLaporanOutstandAdmin",
  enableReinitialize: true,
})(FormLaporanOutstandAdmin);
export default connect(maptostate, null)(FormLaporanOutstandAdmin);
