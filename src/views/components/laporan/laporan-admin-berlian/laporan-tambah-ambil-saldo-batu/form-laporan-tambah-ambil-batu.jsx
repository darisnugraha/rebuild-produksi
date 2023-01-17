import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import "antd/dist/antd.css";
import { getAllLaporanTambahAmbilSaldoBatu } from "../../../../../application/actions/laporantambahambilsaldobatu";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanTambahAmbilSaldoBatu?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanTambahAmbilSaldoBatu?.values.date,
        transaksi: state.form.FormLaporanTambahAmbilSaldoBatu?.values.transaksi,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        transaksi: "TAMBAH",
      },
    };
  }
};

let FormLaporanTambahAmbilSaldoBatu = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
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
            showSearch
            name="transaksi"
            label={<span style={{ fontSize: "13px" }}>Transaksi</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Transaksi"
            onBlur={(e) => e.preventDefault()}
          >
            <Option value="TAMBAH" key="TAMBAH">
              <span style={{ fontSize: "13px" }}>Tambah</span>
            </Option>
            <Option value="AMBIL" key="AMBIL">
              <span style={{ fontSize: "13px" }}>Ambil</span>
            </Option>
          </Field>
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanTambahAmbilSaldoBatu)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanTambahAmbilSaldoBatu = reduxForm({
  form: "FormLaporanTambahAmbilSaldoBatu",
  enableReinitialize: true,
})(FormLaporanTambahAmbilSaldoBatu);
export default connect(maptostate, null)(FormLaporanTambahAmbilSaldoBatu);
