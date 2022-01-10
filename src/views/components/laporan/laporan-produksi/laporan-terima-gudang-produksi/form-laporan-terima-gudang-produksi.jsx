import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import divisimaster from "../../../../../application/selectors/kirimbahanadmin";
import "antd/dist/antd.css";
import { getAllTerimaGudangProduksi } from "../../../../../application/actions/laporanproduksi";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanTerimaGudangProduksi?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTerimaGudangProduksi?.values.date,
        divisi: state.form.FormLaporanTerimaGudangProduksi?.values.divisi,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        divisi: state.kirimbahanadmin.feedback[3]?.nama_divisi,
      },
    };
  }
};

let FormLaporanTerimaGudangProduksi = (prop) => {
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
        <Col offset={1}>
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
                item.nama_divisi === "GUDANG QC JC" ||
                item.nama_divisi === "GUDANG QC VV"
              ) {
                return (
                  <Option value={item.nama_divisi} key={item.nama_divisi}>
                    <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
                  </Option>
                );
              } else {
                return false;
              }
            })}
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllTerimaGudangProduksi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTerimaGudangProduksi = reduxForm({
  form: "FormLaporanTerimaGudangProduksi",
  enableReinitialize: true,
})(FormLaporanTerimaGudangProduksi);
export default connect(maptostate, null)(FormLaporanTerimaGudangProduksi);
