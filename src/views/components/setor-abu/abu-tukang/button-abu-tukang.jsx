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
  return {
    initialValues: {
      divisi: state.kirimbahanadmin.feedback[0]?.divisi,
      staff: state.mastertukang.feedback[0]?.nama_tukang,
    },
  };
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
        <Col span={6}>
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
        <Col span={6} offset={1}>
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
                <Option value={item.divisi} key={item.divisi}>
                  <span style={{ fontSize: "13px" }}>{item.divisi}</span>
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
