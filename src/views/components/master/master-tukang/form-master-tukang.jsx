import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const FormTambahMasterTukang = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Tukang"
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
              name="kode_tukang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Tukang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Tukang"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_tukang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Tukang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Tukang"
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
  form: "FormTambahMasterTukang",
  initialValues: {
    kode_tukang: "kode_tukang",
    nama_tukang: "nama_tukang",
    no_hp: "no_hp",
    email: "email",
  },
})(FormTambahMasterTukang);
