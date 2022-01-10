import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import divisimaster from "../../../../../application/selectors/kirimbahanadmin";
import mastertukang from "../../../../../application/selectors/mastertukang";
import "antd/dist/antd.css";
import { getAllOutstandProduksi } from "../../../../../application/actions/laporanproduksi";

const { Option } = Select;

const maptostate = (state) => {
  if (state.form.FormLaporanOutstandProduksi?.values !== undefined) {
    return {
      initialValues: {
        divisi: state.form.FormLaporanOutstandProduksi?.values.divisi,
        tukang: state.form.FormLaporanOutstandProduksi?.values.tukang,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: state.kirimbahanadmin.feedback[0]?.nama_divisi,
        tukang: state.mastertukang.feedback[0]?.kode_staff,
      },
    };
  }
};

let FormLaporanOutstandProduksi = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataDivisi = useSelector(divisimaster.getAllDivisi);
  const dataTukang = useSelector(mastertukang.getAllMasterTukang);
  return (
    <Form layout="vertical">
      <Row>
        <Col>
          <Field
            name="divisi"
            label={<span style={{ fontSize: "13px" }}>Divisi</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Divisi"
            onBlur={(e) => e.preventDefault()}
          >
            {dataDivisi.map((item) => {
              return (
                <Option value={item.nama_divisi} key={item.nama_divisi}>
                  <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
                </Option>
              );
            })}
          </Field>
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
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllOutstandProduksi)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanOutstandProduksi = reduxForm({
  form: "FormLaporanOutstandProduksi",
  enableReinitialize: true,
})(FormLaporanOutstandProduksi);
export default connect(maptostate, null)(FormLaporanOutstandProduksi);
