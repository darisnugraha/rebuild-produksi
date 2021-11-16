import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";


const FormTambahMasterUkuran = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Ukuran"
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
              name="ukuran"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Ukuran</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Ukuran"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterUkuran",
  initialValues: {
    ukuran: "ukuran",
  },
})(FormTambahMasterUkuran);
