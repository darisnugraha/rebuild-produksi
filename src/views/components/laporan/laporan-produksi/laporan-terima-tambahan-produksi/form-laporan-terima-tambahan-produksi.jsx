import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import divisimaster from "../../../../../application/selectors/kirimbahanadmin";
import "antd/dist/antd.css";
import { getAllTerimaTambahanProduksi } from "../../../../../application/actions/laporanproduksi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  return {
    initialValues: {
      date: [moment(today, dateFormat), moment(today, dateFormat)],
      divisi: state.kirimbahanadmin.feedback[0]?.divisi,
    },
  };
};

let FormLaporanTerimaTambahanProduksi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataDivisi = useSelector(divisimaster.getAllDivisi);
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
        <Col offset={1} span={6}>
          <Field
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
          >
            {dataDivisi.map((item) => {
              if (
                item.divisi === "GUDANG QC JC" ||
                item.divisi === "GUDANG QC VV"
              ) {
                return false;
              } else {
                return (
                  <Option value={item.divisi} key={item.divisi}>
                    <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                  </Option>
                );
              }
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllTerimaTambahanProduksi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaTambahanProduksi = reduxForm({
  form: "FormLaporanTerimaTambahanProduksi",
  enableReinitialize: true,
})(FormLaporanTerimaTambahanProduksi);
export default connect(maptostate, null)(FormLaporanTerimaTambahanProduksi);
