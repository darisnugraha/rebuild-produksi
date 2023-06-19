import React from "react";
import { Form, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import "antd/dist/antd.css";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  getBeratKotorKembali,
  getKadar,
  setBahanKembali,
  setKeterangan,
} from "../../../../application/actions/abutukangpotong";
import MasterBahan from "../../../../application/selectors/masterbahan";

const maptostate = (state) => {
  const data = JSON.parse(localStorage.getItem("data_select_potong")) || [];
  if (data.length !== 0) {
    if (state.abutukangcor.bahan_kembali !== "") {
      return {
        initialValues: {
          keterangan: state.abutukangpotong.keterangan,
          susut_bruto: state.abutukangpotong.berat_bruto,
          berat_kotor_kembali: state.abutukangpotong.berat_kotor,
          kadar: state.abutukangpotong.kadar,
          k_24: state.abutukangpotong.k24,
          susut_24k: state.abutukangpotong.k_susut24,
          bahan_kembali: state.abutukangcor.bahan_kembali,
        },
      };
    } else {
      return {
        initialValues: {
          keterangan: state.abutukangpotong.keterangan,
          susut_bruto: state.abutukangpotong.berat_bruto,
          berat_kotor_kembali: state.abutukangpotong.berat_kotor,
          kadar: state.abutukangpotong.kadar,
          k_24: state.abutukangpotong.k24,
          susut_24k: state.abutukangpotong.k_susut24,
          bahan_kembali: state.masterbahan.feedback[0]?.nama_bahan,
        },
      };
    }
  } else {
    return {
      initialValues: {
        keterangan: "",
        susut_bruto: 0,
        berat_kotor_kembali: 0,
        kadar: 0,
        k_24: 0,
        susut_24k: 0,
        bahan_kembali: state.masterbahan.feedback[0]?.nama_bahan,
      },
    };
  }
};

const { Option } = Select;

let FormAbuTukangPotong = (prop) => {
  const dispatch = useDispatch();
  const dataJenisBahan = useSelector(MasterBahan.getAllMasterBahan);
  return (
    <Form layout="horizontal">
      <Row>
        <Col offset={1} span={8}>
          <Field
            name="keterangan"
            type="text"
            addonBefore={<span style={{ fontSize: "13px" }}>Keterangan</span>}
            component={styleAntd.AInput}
            onChange={(e) => dispatch(setKeterangan(e.target.value))}
            className="form-item-group"
            placeholder="Masukkan Keterangan"
          />
        </Col>
        <Col offset={1} span={8}>
          <Field
            showSearch
            name="bahan_kembali"
            label={<span style={{ fontSize: "13px" }}>Bahan Kembali</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih Bahan Kembali"
            onBlur={(e) => e.preventDefault()}
            onChange={(e) => dispatch(setBahanKembali(e))}
          >
            {dataJenisBahan.map((item) => {
              return (
                <Option value={item.nama_bahan} key={item.nama_bahan}>
                  <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col offset={1} span={8}>
          <Field
            name="berat_kotor_kembali"
            type="text"
            addonBefore={
              <span style={{ fontSize: "13px" }}>Berat Kotor Kembali</span>
            }
            onChange={(e) => dispatch(getBeratKotorKembali(e.target.value))}
            component={styleAntd.AInput}
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
            onChange={(e) => dispatch(getKadar(e.target.value))}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Kadar"
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

FormAbuTukangPotong = reduxForm({
  form: "FormAbuTukangPotong",
  enableReinitialize: true,
})(FormAbuTukangPotong);
export default connect(maptostate, null)(FormAbuTukangPotong);
