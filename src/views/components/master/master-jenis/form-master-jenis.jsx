import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";


const FormTambahMasterJenis = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Jenis"
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
              name="kode_jenis"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_jenis"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Jenis</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Jenis"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterJenis",
  initialValues: {
    kode_jenis: "kode_jenis",
    nama_jenis: "nama_jenis",
  },
})(FormTambahMasterJenis);
