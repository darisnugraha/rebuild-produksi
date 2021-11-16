import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const FormTambahMasterMarketing = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Marketing"
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
              name="kode_marketing"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Marketing</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Marketing"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_marketing"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Marketing</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Marketing"
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
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterMarketing",
  initialValues: {
    kode_marketing: "kode_marketing",
    nama_marketing: "nama_marketing",
    no_hp: "no_hp",
    email: "email",
  },
})(FormTambahMasterMarketing);
