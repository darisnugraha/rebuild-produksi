import React from "react";
import "antd/dist/antd.css";
import { Form, Button, Row, Col, Select, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";

const { Option } = Select;

const FormTambahKirimBatuProduksi = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Tambah Kirim Batu Produksi"
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
              name="no_jo"
              type="text"
              label={<span style={{ fontSize: "13px" }}>No Job Order</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan No JO"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_barang"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Kode Barang</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Kode Barang"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="jenis_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jenis Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jenis Bahan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="kode_batu"
              label={<span style={{ fontSize: "13px" }}>Kode Batu</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Batu"
              defaultValue="d010"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="d010">
                <span style={{ fontSize: "13px" }}>D010</span>
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
              name="berat_pcs"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Pcs</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Pcs"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="jumlah_kirim"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Jumlah Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Kirim"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_kirim"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Kirim</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Kirim"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

export default reduxForm({
  form: "FormTambahKirimBatuProduksi",
  initialValues: {
    no_jo: "no_jo",
    kode_barang: "kode_barang",
    jenis_bahan: "jenis_bahan",
    kode_batu: "kode_batu",
    jumlah_kirim: "jumlah_kirim",
    berat_kirim: "berat_kirim",
  },
})(FormTambahKirimBatuProduksi);
