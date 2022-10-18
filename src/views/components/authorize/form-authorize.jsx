import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import { simpanSaldoBahan } from "../../../application/actions/saldomurni";

const maptostate = (state) => {
  return {
    initialValues: {
      user_id: "",
      password: "",
    },
  };
};

let FormAuthorize = ({ visible, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    dispatch(simpanSaldoBahan);
  };

  return (
    <Modal
      visible={visible}
      title={"Otorisasi User"}
      okText={"Simpan"}
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        handleSubmit();
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="user_id"
              type="text"
              label={<span style={{ fontSize: "13px" }}>User ID</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan User ID"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="password"
              type="password"
              label={<span style={{ fontSize: "13px" }}>Password</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Password"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormAuthorize = reduxForm({
  form: "FormAuthorize",
  enableReinitialize: true,
})(FormAuthorize);
export default connect(maptostate, null)(FormAuthorize);
