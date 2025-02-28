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
  return {
    initialValues: {
      tukang: state.mastertukang.feedback[0]?.kode_tukang,
    },
  };
};

let FormLaporanOutstandAdmin = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMasterTukang = useSelector(mastertukang.getAllMasterTukang);
  return (
    <Form layout="vertical">
      <Row>
        <Col span={6}>
          <Field
            showSearch
            name="tukang"
            label={<span style={{ fontSize: "13px" }}>Tukang</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Tukang"
            onBlur={(e) => e.preventDefault()}
          >
            {dataMasterTukang.map((item) => {
              return (
                <Option value={item.nama_tukang} key={item.kode_tukang}>
                  <span style={{ fontSize: "13px" }}>
                    {item.kode_tukang === item.nama_tukang
                      ? item.nama_tukang
                      : item.nama_tukang + " (" + item.kode_tukang + ")"}
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
