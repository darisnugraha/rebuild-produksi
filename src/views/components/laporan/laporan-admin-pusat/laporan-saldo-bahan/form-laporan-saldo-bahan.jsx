import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import mastertukang from "../../../../../application/selectors/mastertukang";
import kelompokbahan from "../../../../../application/selectors/groupbahan";
import divisi from "../../../../../application/selectors/kirimbahanadmin";
import "antd/dist/antd.css";
import { getAllLaporanSaldoBahanPusat } from "../../../../../application/actions/laporansaldobahanpusat";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  if (state.form.FormLaporanSaldoBahanPusat?.values !== undefined) {
    return {
      initialValues: {
        date: state.form.FormLaporanSaldoBahanPusat?.values.date,
        tukang: state.form.FormLaporanSaldoBahanPusat?.values.tukang,
        bahan: state.form.FormLaporanSaldoBahanPusat?.values.bahan,
        divisi: state.form.FormLaporanSaldoBahanPusat?.values.divisi,
      },
    };
  } else {
    return {
      initialValues: {
        date: [moment(today, dateFormat), moment(today, dateFormat)],
        tukang: state.mastertukang.feedback[0]?.kode_staff,
        bahan: state.groupbahan.feedback[0]?.nama_bahan,
        divisi: state.kirimbahanadmin.feedback[0]?.nama_divisi,
      },
    };
  }
};

let FormLaporanSaldoBahanPusat = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataMasterTukang = useSelector(mastertukang.getAllMasterTukang);
  const dataKelompokBahan = useSelector(kelompokbahan.getAllGroupBahan);
  const dataDivisi = useSelector(divisi.getAllDivisi);
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
          <Field
            name="bahan"
            label={<span style={{ fontSize: "13px" }}>Kelompok Bahan</span>}
            style={{ width: 250 }}
            component={styleAntd.ASelect}
            placeholder="Pilih Kelompok Bahan"
            onBlur={(e) => e.preventDefault()}
          >
            {dataKelompokBahan.map((item) => {
              return (
                <Option value={item.nama_bahan} key={item.nama_bahan}>
                  <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                </Option>
              );
            })}
          </Field>
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
              console.log(item);
              return (
                <Option value={item.nama_divisi} key={item.nama_divisi}>
                  <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
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
            onClick={() => prop.dispatch(getAllLaporanSaldoBahanPusat)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSaldoBahanPusat = reduxForm({
  form: "FormLaporanSaldoBahanPusat",
  enableReinitialize: true,
})(FormLaporanSaldoBahanPusat);
export default connect(maptostate, null)(FormLaporanSaldoBahanPusat);
