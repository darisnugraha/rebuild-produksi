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
  setCloseSusut,
} from "../../../../application/actions/terimalebur";

const maptostate = (state) => {
  if (state.terimalebur.feedback.length !== 0) {
    return {
      initialValues: {
        no_kirim: state.terimalebur.feedback[0]?.no_kirim_lebur,
        berat_murni: state.terimalebur.feedback[0]?.total_berat_murni,
        awal_24k: state.terimalebur.feedback[0]?.karat_24,
        kadar: state.terimalebur.feedback[0]?.kadar,
        berat_terima: state.terimalebur.beratTerima,
        berat_susut: state.terimalebur.susut,
        close_susut: state.terimalebur.closeSusut,
      },
    };
  } else {
    return {
      initialValues: {
        no_kirim: "",
        berat_murni: "",
        awal_24k: "",
        kadar: "",
        berat_terima: "",
        berat_susut: "",
        close_susut: state.terimalebur.closeSusut,
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
              className="form-item-group"
              placeholder="Masukkan No Kirim Lebur"
              onBlur={(e) => {
                dispatch(getTerimaLebur({ noKirim: e.target.value }));
              }}
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
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="awal_24k"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Awal 24k</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Awal 24k"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_murni"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Bruto Awal</span>}
              component={styleAntd.AInput}
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
              className="form-item-group"
              placeholder="Masukkan Susut"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="susut_24k"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Susut 24K</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Susut 24K"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              label="Close Susut"
              name="close_susut"
              id="close_susut"
              component={styleAntd.ACheckBox}
              type="checkbox"
              onChange={(e) => {
                dispatch(setCloseSusut({ closeSusut: e.target.checked }));
              }}
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
