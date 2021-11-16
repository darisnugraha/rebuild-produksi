import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const { Option } = Select;

const FormTambahMasterBatu = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Master Batu"
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
              name="kode_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Batu"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="nama_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Nama Batu</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Nama Batu"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="ukuran_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Ukuran</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Ukuran Batu"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_jenis_batu"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis batu</span>}
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis Batu"
              defaultValue="satu"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="satu">
                <span style={{ fontSize: "13px" }}>Batu 1</span>
              </Option>
              <Option value="dua">
                <span style={{ fontSize: "13px" }}>Batu 2</span>
              </Option>
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="kode_cutting_batu"
              label={
                <span style={{ fontSize: "13px" }}>Kode Cutting Batu</span>
              }
              // style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Cutting Batu"
              defaultValue="bg"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="bg">
                <span style={{ fontSize: "13px" }}>BG</span>
              </Option>
              <Option value="cl">
                <span style={{ fontSize: "13px" }}>CL</span>
              </Option>
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat_batu"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahMasterBatu",
  initialValues: {
    kode_batu: "kode_batu",
    nama_batu: "nama_batu",
    ukuran_batu: "ukuran_batu",
    kode_jenis_batu: "kode_jenis_batu",
    kode_cutting_batu: "kode_cutting_batu",
    berat_batu: "berat_batu",
  },
})(FormTambahMasterBatu);
