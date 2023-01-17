import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import TerimaBatu from "../../../../application/selectors/terimabatu";
import moment from "moment";
import {
  getAllNoKirimBatuByTanggal,
  getDetailKirimBatu,
} from "../../../../application/actions/terimabatu";

const dateFormat = "DD/MM/YYYY";
const today = new Date();
const { Option } = Select;

const maptostate = (state) => {
  return {
    initialValues: {
      tanggal_kirim: moment(today, dateFormat),
      no_kirim_batu: state.terimabatu.detailKirim[0]?.no_kirim_batu || "",
      no_job_order: state.terimabatu.detailKirim[0]?.no_job_order || "",
    },
  };
};

let FormTerimaBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataNOKirim = useSelector(TerimaBatu.getAllNoKirimBatuByTanggal);

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
        <Row gutter={[8, 8]}>
          <Col span={12}>
            <Field
              name="tanggal_kirim"
              type="date"
              label={<span style={{ fontSize: "13px" }}>Tanggal Kirim</span>}
              component={styleAntd.ADatePick}
              className="form-item-group"
              onBlur={(e) => {
                e.preventDefault();
                dispatch(
                  getAllNoKirimBatuByTanggal({ tanggal: e.target.value })
                );
              }}
            />
          </Col>
          <Col span={12}>
            <Field
              name="no_kirim_batu"
              label={<span style={{ fontSize: "13px" }}>No Kirim Batu</span>}
              component={styleAntd.ASelect}
              placeholder="Pilih No Kirim Batu"
              onBlur={(e) => {
                e.preventDefault();
              }}
              onChange={(val) => {
                dispatch(getDetailKirimBatu({ noKirimBatu: val }));
              }}
            >
              {dataNOKirim.map((item) => {
                return (
                  <Option value={item.no_kirim_batu} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.no_kirim_batu}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={12}>
            <Field
              name="no_job_order"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Job Order"
              disabled
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
