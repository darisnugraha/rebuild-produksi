import React from "react";
import { Button, Col, Form, Row, Select } from "antd";
import { connect, useDispatch } from "react-redux";
import "antd/dist/antd.css";
import "antd-button-color/dist/css/style.css";
import { useSelector } from "react-redux";
import ui from "../../../../application/selectors/ui";
import Divisi from "../../../../application/selectors/kirimbahanadmin";
import Tukang from "../../../../application/selectors/mastertukang";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import { getAllAbuTukang } from "../../../../application/actions/abutukang";

const { Option } = Select;

const maptostate = (state) => {
  if (state.form.ButtonAbuTukang?.values !== undefined) {
    return {
      initialValues: {
        divisi: state.form.ButtonAbuTukang?.values.divisi,
        staff: state.form.ButtonAbuTukang?.values.staff,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: state.kirimbahanadmin.feedback[0]?.kode_divisi,
        staff: state.mastertukang.feedback[0]?.kode_staff,
      },
    };
  }
};

let ButtonAbuTukang = () => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const isLoading = useSelector(ui.getBtnLoading);
  const dataDivisi = useSelector(Divisi.getAllDivisi);
  const dataTukang = useSelector(Tukang.getAllMasterTukang);
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="staff"
            label={<span style={{ fontSize: "13px" }}>Tukang</span>}
            component={styleAntd.ASelect}
            style={{ width: 250 }}
            placeholder="Pilih Tukang"
            onBlur={(e) => e.preventDefault()}
          >
            {dataTukang.map((item) => {
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
          <Field
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            component={styleAntd.ASelect}
            style={{ width: 250 }}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
          >
            {dataDivisi.map((item) => {
              return (
                <Option value={item.kode_divisi} key={item.kode_divisi}>
                  <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            loading={isLoading}
            style={{ marginTop: 30 }}
            onClick={() => {
              dispatch(getAllAbuTukang);
            }}
            className="ant-btn-success"
          >
            + Lihat Data
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

ButtonAbuTukang = reduxForm({
  form: "ButtonAbuTukang",
  enableReinitialize: true,
})(ButtonAbuTukang);
export default connect(maptostate, null)(ButtonAbuTukang);
