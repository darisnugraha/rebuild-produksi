import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";


const FormTambahMasterCustomer = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Customer"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form layout="vertical">
        <Row>
          <Col offset={1}>
            <Field
              name="kode_customer"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Customer</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Customer"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_customer"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Customer</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Customer"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_toko"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Toko</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Toko"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="alamat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Alamat</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Alamat"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="no_hp"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Hp</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Hp"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="email"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Email</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Email"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="negara"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Negara</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Negara"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="lokasi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Lokasi</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Lokasi"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterCustomer",
  initialValues: {
    kode_customer: "kode_customer",
    nama_customer: "nama_customer",
    nama_toko: "nama_toko",
    alamat: "alamat",
    no_hp: "no_hp",
    email: "email",
    negara: "negara",
    lokasi: "lokasi",

  },
})(FormTambahMasterCustomer);
