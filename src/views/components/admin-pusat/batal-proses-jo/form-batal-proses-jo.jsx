import React from "react";
import { connect, useDispatch } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import BatalProsesJO from "../../../../application/selectors/batalprosesjo";
import {
  addDataBatalProsesJO,
  getDataJOByNoProses,
} from "../../../../application/actions/batalprosesjo";

const maptostate = (state) => {
  if (state.batalprosesjo.feedback.length !== 0) {
    return {
      initialValues: {
        no_proses: state.batalprosesjo.noProses,
        no_job_order: state.batalprosesjo.feedback[0]?.no_job_order,
      },
    };
  } else {
    return {
      initialValues: {
        no_proses: state.batalprosesjo.noProses,
        no_job_order: "",
      },
    };
  }
};
const { Option } = Select;
let FormBatalProsesJO = ({ visible, onCreate, onCancel }, prop) => {
  const dispatch = useDispatch();
  const btnLoading = useSelector(ui.getBtnLoading);
  const [form] = Form.useForm();
  const dataJO = useSelector(BatalProsesJO.getDataJO);

  return (
    <Modal
      visible={visible}
      title="Data Job Order"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addDataBatalProsesJO);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              name="no_proses"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Kirim/Terima</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Kirim/Terima"
              onChange={(e) => dispatch(getDataJOByNoProses(e.target.value))}
            />
          </Col>
          <Col span={12}>
            <Field
              name="no_job_order"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih No Job Order"
              onBlur={(e) => e.preventDefault()}
            >
              {dataJO.map((item) => {
                return (
                  <Option value={item.no_job_order} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.no_job_order}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormBatalProsesJO = reduxForm({
  form: "FormBatalProsesJO",
  enableReinitialize: true,
})(FormBatalProsesJO);
export default connect(maptostate, null)(FormBatalProsesJO);
