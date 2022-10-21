import React from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col, Select } from "antd";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import "antd/dist/antd.css";
import CetakBarcode from "../../../../application/selectors/cetakbarcode";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addCetakBarcode,
  getDataByNoInduk,
  getDataByNoJO,
} from "../../../../application/actions/cetakbarcode";

const { Option } = Select;

const maptostate = (state) => {
  if (state.cetakbarcode.feedbackDetailJO !== undefined) {
    return {
      initialValues: {
        no_induk_job_order:
          state.cetakbarcode.feedbackDetailJO?.no_induk_job_order,
        no_job_order: state.cetakbarcode.feedbackDetailJO?.no_job_order,
        kode_barang: state.cetakbarcode.feedbackDetailJO?.kode_barang,
        kode_jenis_bahan: state.cetakbarcode.feedbackDetailJO?.kode_jenis_bahan,
        berat_akhir: state.cetakbarcode.feedbackDetailJO?.berat_akhir,
      },
    };
  } else {
    return {
      initialValues: {
        no_induk_job_order: state.cetakbarcode.feedback[1]?.no_induk_job_order,
        no_job_order: state.cetakbarcode.feedbackJO[1]?.no_job_order,
      },
    };
  }
};

let FormCetakBarcode = (prop) => {
  const dispatch = useDispatch();
  const dataNoInduk = useSelector(CetakBarcode.getAllCetakBarcode);
  const dataNoJO = useSelector(CetakBarcode.getJOByNoInduk);
  return (
    <Form layout="vertical">
      <Row>
        <Col offset={1} span={5}>
          <Field
            name="no_induk_job_order"
            label={<span style={{ fontSize: "13px" }}>No Induk Job Order</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih No Induk Job Order"
            onChange={(e) => dispatch(getDataByNoInduk(e))}
            onBlur={(e) => e.preventDefault()}
          >
            {dataNoInduk.map((item) => {
              return (
                <Option value={item.no_induk_job_order} key={item._id}>
                  <span style={{ fontSize: "13px" }}>
                    {item.no_induk_job_order}
                  </span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col offset={1} span={5}>
          <Field
            name="no_job_order"
            label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
            component={styleAntd.ASelect}
            placeholder="Pilih No Job Order"
            onBlur={(e) => e.preventDefault()}
            onChange={(e) => dispatch(getDataByNoJO(e))}
          >
            {dataNoJO.map((item) => {
              return (
                <Option value={item.no_job_order} key={item._id}>
                  <span style={{ fontSize: "13px" }}>{item.no_job_order}</span>
                </Option>
              );
            })}
          </Field>
        </Col>
        <Col offset={1} span={5}>
          <Field
            name="kode_barang"
            type="text"
            label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Kode Barang"
            disabled
          />
        </Col>
        <Col offset={1} span={5}>
          <Field
            name="kode_jenis_bahan"
            type="text"
            label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Kode Jenis Bahan"
            disabled
          />
        </Col>
        <Col offset={1} span={5}>
          <Field
            name="berat_akhir"
            type="text"
            label={<span style={{ fontSize: "13px" }}>Berat Akhir</span>}
            component={styleAntd.AInput}
            className="form-item-group"
            placeholder="Masukkan Berat Akhir"
            disabled
          />
        </Col>
        <Col offset={1}>
          <Button
            type="primary"
            htmltype="button"
            style={{ marginTop: 29 }}
            onClick={() => dispatch(addCetakBarcode)}
          >
            Cetak Barcode
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

FormCetakBarcode = reduxForm({
  form: "FormCetakBarcode",
  enableReinitialize: true,
})(FormCetakBarcode);
export default connect(maptostate, null)(FormCetakBarcode);
