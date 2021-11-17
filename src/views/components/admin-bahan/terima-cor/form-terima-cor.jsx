import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const { Option } = Select;

const FormTerimaCOR = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
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
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis Bahan"
              defaultValue="k34m"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="k34m">
                <span style={{ fontSize: "13px" }}>K 34 Murni</span>
              </Option>
              <Option value="d1">
                <span style={{ fontSize: "13px" }}>D1</span>
              </Option>
              <Option value="dab1ml">
                <span style={{ fontSize: "13px" }}>DAB1ML</span>
              </Option>
              <Option value="mop1">
                <span style={{ fontSize: "13px" }}>MOP1</span>
              </Option>
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat_awal"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Awal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Awal"
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
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTerimaCOR",
  initialValues: {
    no_pohon: "no_pohon",
    kode_jenis_bahan: "kode_jenis_bahan",
    berat_awal: "berat_awal",
    berat_terima: "berat_terima",
    berat_susut: "berat_susut",
  },
})(FormTerimaCOR);
