import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import TerimaBahanTukang from "../../../../application/selectors/terimabahantukang";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimabahantukang.feedback.length !== 0) {
    return {
      initialValues: {
        divisi_asal: state.terimabahantukang.feedback[0]?.kode_divisi,
        tukang_asal: state.terimabahantukang.feedbackTukang[0]?.kode_staff,
        bahan: state.terimabahantukang.feedbackBahan[0]?.kode_bahan,
        berat_bahan: state.terimabahantukang.feedbackBerat[0]?.berat_total,
      },
    };
  } else {
    return {
      initialValues: {
        divisi_asal: "",
        tukang_asal: "",
        bahan: "",
        berat_bahan: "",
      },
    };
  }
};

let FormTerimaBahanTukang = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataDivisiAsal = useSelector(
    TerimaBahanTukang.getAllDivisiAsalSaldoBahan
  );
  const dataTukangAsal = useSelector(TerimaBahanTukang.getAllTukangAsal);
  const dataBahanAsal = useSelector(TerimaBahanTukang.getAllBahanAsal);

  return (
    <Modal
      visible={visible}
      title="Data Terima"
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
              name="divisi_asal"
              label={<span style={{ fontSize: "13px" }}>Divisi Asal</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi Asal"
              onBlur={(e) => e.preventDefault()}
            >
              {dataDivisiAsal.map((item) => {
                return (
                  <Option value={item.kode_divisi} key={item.kode_divisi}>
                    <span style={{ fontSize: "13px" }}>{item.nama_divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="tukang_asal"
              label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Asal"
              onBlur={(e) => e.preventDefault()}
            >
              {dataTukangAsal.map((item) => {
                return (
                  <Option value={item.kode_staff} key={item.kode_staff}>
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_staff + " (" + item.kode_staff + ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataBahanAsal.map((item) => {
                return (
                  <Option value={item.kode_bahan} key={item.kode_bahan}>
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
              style={{ width: 250 }}
              label={<span style={{ fontSize: "13px" }}>Berat Bahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaBahanTukang = reduxForm({
  form: "FormTerimaBahanTukang",
  enableReinitialize: true,
})(FormTerimaBahanTukang);
export default connect(maptostate, null)(FormTerimaBahanTukang);
