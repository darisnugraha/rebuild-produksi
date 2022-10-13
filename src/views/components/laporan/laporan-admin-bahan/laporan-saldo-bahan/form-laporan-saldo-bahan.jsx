import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import moment from "moment";
import styleAntd from "../../../../../infrastructure/shared/styleAntd";
import ui from "../../../../../application/selectors/ui";
import kelompokbahan from "../../../../../application/selectors/groupbahan";
import "antd/dist/antd.css";
import { getAllLaporanSaldoBahan } from "../../../../../application/actions/laporansaldobahan";

const { Option } = Select;
const dateFormat = "DD/MM/YYYY";
const today = new Date();

const maptostate = (state) => {
  return {
    initialValues: {
      date: [moment(today, dateFormat), moment(today, dateFormat)],
      kelompok_bahan: state.groupbahan.feedback[0]?.nama_bahan,
    },
  };
};

let FormLaporanSaldoBahan = (prop) => {
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const dataKelompokBahan = useSelector(kelompokbahan.getAllGroupBahan);
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
            name="kelompok_bahan"
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
          <Button
            type="primary"
            htmltype="button"
            loading={btnLoading}
            onClick={() => prop.dispatch(getAllLaporanSaldoBahan)}
            style={{ marginTop: 29 }}
          >
            Lihat Laporan
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormLaporanSaldoBahan = reduxForm({
  form: "FormLaporanSaldoBahan",
  enableReinitialize: true,
})(FormLaporanSaldoBahan);
export default connect(maptostate, null)(FormLaporanSaldoBahan);
