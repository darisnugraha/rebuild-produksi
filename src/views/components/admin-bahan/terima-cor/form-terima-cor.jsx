import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const FormTerimaCOR = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Detail Pohon"
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
              name="no_pohon"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nomor Pohon</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nomor Pohon"
            />
          </Col>

          <Col offset={1}>
            <Field
              name="kode_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis Bahan"
              disabled
            />
          </Col>

          <Col offset={1}>
            <Field
              name="berat_awal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Awal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Awal"
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
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_susut"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Susut</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Susut"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTerimaCOR",
})(FormTerimaCOR);
