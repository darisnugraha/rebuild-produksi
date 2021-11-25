import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const { Option } = Select;

const FormDataStaff = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Data Staff"
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
              name="kode_staff"
              label={<span style={{ fontSize: "13px" }}>Kode Staff</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Staff"
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
              name="no_pohon"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Pohon</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No Pohon"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="bahan_kembali"
              label={<span style={{ fontSize: "13px" }}>Bahan Kembali</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan Kembali"
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
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormDataStaff",
  initialValues: {
    kode_jenis_bahan: "kode_jenis_bahan",
    berat_dibutuhkan: "berat_dibutuhkan",
    berat_susut: "berat_susut",
    no_pohon: "no_pohon",
  },
})(FormDataStaff);
