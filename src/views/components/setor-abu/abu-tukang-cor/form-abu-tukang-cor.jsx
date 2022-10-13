import React from "react";
import { Form, Row, Col } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  getBeratKotorKembali,
  getKadar,
  setBahanKembali,
} from "../../../../application/actions/abutukangcor";

const maptostate = (state) => {
  const data = JSON.parse(localStorage.getItem("data_select")) || [];
  if (data.length !== 0) {
    return {
      initialValues: {
        bahan_kembali: state.abutukangcor.bahan_kembali,
        susut_bruto: state.abutukangcor.berat_bruto,
        berat_kotor_kembali: state.abutukangcor.berat_kotor,
        kadar: state.abutukangcor.kadar,
        k_24: state.abutukangcor.k24,
        susut_24k: state.abutukangcor.k_susut24,
      },
    };
  } else {
    return {
      initialValues: {
        bahan_kembali: 0,
        susut_bruto: 0,
        berat_kotor_kembali: 0,
        kadar: 0,
        k_24: 0,
        susut_24k: 0,
      },
    };
  }
};

let FormAbuTukangCOR = (prop) => {
  const dispatch = useDispatch();
  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1} span={8}>
          <Field
            name="bahan_kembali"
            type="text"
            addonBefore={
              <span style={{ fontSize: "13px" }}>Bahan Kembali</span>
            }
            component={styleAntd.AInput}
            onChange={(e) => dispatch(setBahanKembali(e.target.value))}
            className="form-item-group"
            placeholder="Masukkan Bahan Kembali"
          />
        </Col>
        <Col offset={1} span={8}>
          <Field
            name="berat_kotor_kembali"
            type="text"
            addonBefore={
              <span style={{ fontSize: "13px" }}>Berat Kotor Kembali</span>
            }
            component={styleAntd.AInput}
            onChange={(e) => dispatch(getBeratKotorKembali(e.target.value))}
            className="form-item-group"
            placeholder="Masukkan Berat Kotor Kembali"
          />
        </Col>
        <Col offset={1} span={8}>
          <Field
            name="susut_bruto"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>Susut Bruto</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Susut Bruto"
            disabled
          />
        </Col>
        <Col offset={1} span={8}>
          <Field
            name="kadar"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>Kadar</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Kadar"
            onChange={(e) => dispatch(getKadar(e.target.value))}
          />
        </Col>
        <Col offset={1} span={8}>
          <Field
            name="k_24"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>24K</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan 24K"
            disabled
          />
        </Col>
        <Col offset={1} span={8}>
          <Field
            name="susut_24k"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>Susut 24K</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Susut 24K"
            disabled
          />
        </Col>
      </Row>
    </Form>
  );
};

FormAbuTukangCOR = reduxForm({
  form: "FormAbuTukangCOR",
  enableReinitialize: true,
})(FormAbuTukangCOR);
export default connect(maptostate, null)(FormAbuTukangCOR);
