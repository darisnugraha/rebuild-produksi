import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";


const FormTambahMasterCuttingBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Cutting Batu"
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
              name="kode_cutting_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Cutting Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Cutting Batu"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_cutting_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Cutting Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Cutting Batu"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterCuttingBatu",
  initialValues: {
    kode_cutting_batu: "kode_cutting_batu",
    nama_cutting_batu: "nama_cutting_batu",
  },
})(FormTambahMasterCuttingBatu);
