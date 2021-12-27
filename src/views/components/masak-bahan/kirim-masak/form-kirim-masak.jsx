import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import {
  count24K,
  getTerimaLeburMasak,
} from "../../../../application/actions/kirimmasak";

const maptostate = (state) => {
  if (state.kirimmasak.feedback.length !== 0) {
    return {
      initialValues: {
        no_terima_lebur: state.kirimmasak.feedback[0]?.no_terima,
        berat: state.kirimmasak.feedback[0]?.berat_kirim,
        kadar: state.kirimmasak.beratTerima,
        karat: state.kirimmasak.karat24,
      },
    };
  } else {
    return {
      initialValues: {
        no_terima_lebur: "",
        berat: "",
        kadar: "",
        karat: "",
      },
    };
  }
};

let FormKirimMasak = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Tambah Kirim Masak"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="no_terima_lebur"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Terima Lebur</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Terima Lebur"
              onBlur={(e) => {
                dispatch(getTerimaLeburMasak({ noTerima: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Kirim"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kadar"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kadar</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kadar"
              onBlur={(e) => {
                dispatch(count24K({ beratTerima: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="karat"
              type="text"
              label={<span style={{ fontSize: "13px" }}>24K</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan 24K"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormKirimMasak = reduxForm({
  form: "FormKirimMasak",
  enableReinitialize: true,
})(FormKirimMasak);
export default connect(maptostate, null)(FormKirimMasak);
