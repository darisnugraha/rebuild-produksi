import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const maptostate = (state) => {
  return {
    initialValues: {
      divisi: localStorage.getItem("divisi"),
      no_job_order: state.terimabatu.detailKirim[0]?.no_job_order || "",
    },
  };
};

let FormTerimaBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Data Terima"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi</span>}
              style={{ width: 250 }}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              style={{ width: 250 }}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaBatu = reduxForm({
  form: "FormTerimaBatu",
  enableReinitialize: true,
})(FormTerimaBatu);
export default connect(maptostate, null)(FormTerimaBatu);
