import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";

const maptostate = (state) => {
  if (localStorage.getItem("divisi") !== undefined) {
    return {
      initialValues: {
        divisi_terima: localStorage.getItem("divisi") || "",
        no_job_order: "",
      },
    };
  } else {
    return {
      initialValues: {
        divisi_terima: "",
        no_job_order: "",
      },
    };
  }
};

let FormTerimaJO = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {}}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="divisi_terima"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi Terima</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Terima"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="tukang_terima"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Tukang Terima</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Tukang Terima"
              disabled
            />
          </Col>
          <Col offset={1}>
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
          <Col offset={1}>
            <Field
              name="nama_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Barang"
              disabled
            />
          </Col>
          <Col offset={1}>
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
          <Col offset={1}>
            <Field
              name="jumlah_akhir"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jumlah Akhir</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Akhir"
              disabled
            />
          </Col>
          <Col offset={1}>
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
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaJO = reduxForm({
  form: "FormTerimaJO",
  enableReinitialize: true,
})(FormTerimaJO);
export default connect(maptostate, null)(FormTerimaJO);
