import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import {
  getTerimaLebur,
  countSusut,
  addTerimaLebur,
} from "../../../../application/actions/terimalebur";

const maptostate = (state) => {
  if (state.terimalebur.feedback.length !== 0) {
    return {
      initialValues: {
        no_kirim: state.terimalebur.feedback[0]?.no_kirim_lebur,
        berat_murni: state.terimalebur.feedback[0]?.total_berat_murni,
        berat_terima: state.terimalebur.beratTerima,
        berat_susut: state.terimalebur.susut,
      },
    };
  } else {
    return {
      initialValues: {
        no_kirim: "",
        berat_murni: "",
        berat_terima: "",
        berat_susut: "",
      },
    };
  }
};

let FormTerimaLebur = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Terima Lebur"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addTerimaLebur);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="no_kirim"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Kirim Lebur</span>}
              component={styleAntd.AInput}
              style={{ width: 250 }}
              className="form-item-group"
              placeholder="Masukkan No Kirim Lebur"
              onBlur={(e) => {
                dispatch(getTerimaLebur({ noKirim: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_murni"
              type="text"
              label={<span style={{ fontSize: "13px" }}>24k</span>}
              component={styleAntd.AInput}
              style={{ width: 250 }}
              className="form-item-group"
              placeholder="Masukkan 24k"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_terima"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Terima</span>}
              component={styleAntd.AInput}
              style={{ width: 250 }}
              className="form-item-group"
              placeholder="Masukkan Berat Terima"
              onBlur={(e) => {
                dispatch(countSusut({ beratTerima: e.target.value }));
              }}
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_susut"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Susut</span>}
              component={styleAntd.AInput}
              style={{ width: 250 }}
              className="form-item-group"
              placeholder="Masukkan Susut"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaLebur = reduxForm({
  form: "FormTerimaLebur",
  enableReinitialize: true,
})(FormTerimaLebur);
export default connect(maptostate, null)(FormTerimaLebur);
