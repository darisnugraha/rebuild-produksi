import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const { Option } = Select;

const FormTambahMasterJenisBahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Jenis Bahan"
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
              name="kode_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Jenis Bahan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Jenis Bahan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="warna_jenis_bahan"
              label={<span style={{ fontSize: "13px" }}>Warna</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Warna"
              defaultValue="red"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="red">
                <span style={{ fontSize: "13px" }}>Merah</span>
              </Option>
              <Option value="yellow">
                <span style={{ fontSize: "13px" }}>Kuning</span>
              </Option>
              <Option value="green">
                <span style={{ fontSize: "13px" }}>Hijau</span>
              </Option>
              <Option value="black">
                <span style={{ fontSize: "13px" }}>Hitam</span>
              </Option>
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="kadar"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kadar</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kadar Jenis Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterJenisBahan",
  initialValues: {
    kode_jenis_bahan: "kode_jenis_bahan",
    nama_jenis_bahan: "nama_jenis_bahan",
    warna_jenis_bahan: "warna",
    kadar: "kadar",
  },
})(FormTambahMasterJenisBahan);
