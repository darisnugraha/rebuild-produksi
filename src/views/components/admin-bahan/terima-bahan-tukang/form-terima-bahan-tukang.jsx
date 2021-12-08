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
  if (state.terimabahantukang.feedback !== undefined) {
    return {
      initialValues: {
        divisi_asal: state.terimabahantukang.feedback[0]?.kode_divisi,
      },
    };
  } else {
    return {
      initialValues: {
        divisi_asal: "",
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
              name="bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
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
              name="berat_bahan"
              type="text"
              style={{ width: 250 }}
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

FormTerimaBahanTukang = reduxForm({
  form: "FormTerimaBahanTukang",
  enableReinitialize: true,
})(FormTerimaBahanTukang);
export default connect(maptostate, null)(FormTerimaBahanTukang);
