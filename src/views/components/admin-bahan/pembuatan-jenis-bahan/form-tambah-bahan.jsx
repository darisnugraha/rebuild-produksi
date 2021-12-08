import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import PembuatanJenisBahan from "../../../../application/selectors/pembuatanjenisbahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.pembuatanjenisbahan.feedback !== undefined) {
    return {
      initialValues: {
        kode_bahan: state.pembuatanjenisbahan.feedback[0]?.nama_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        kode_bahan: "",
      },
    };
  }
};

let FormTambahBahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataSaldoBahan = useSelector(PembuatanJenisBahan.getAllSaldoBahanStock);

  return (
    <Modal
      visible={visible}
      title="Detail Bahan"
      okText="Tambah"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={onCreate}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="kode_bahan"
              label={<span style={{ fontSize: "13px" }}>Kode Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataSaldoBahan.map((item) => {
                return (
                  <Option value={item.nama_bahan} key={item.nama_bahan}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat_bahan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTambahBahan = reduxForm({
  form: "FormTambahBahan",
  enableReinitialize: true,
})(FormTambahBahan);
export default connect(maptostate, null)(FormTambahBahan);
