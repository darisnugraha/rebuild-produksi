import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";


const FormTambahMasterBahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Bahan"
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
              name="kode_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Bahan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterBahan",
  initialValues: {
    kode_bahan: "kode_bahan",
    nama_bahan: "nama_bahan",
  },
})(FormTambahMasterBahan);
