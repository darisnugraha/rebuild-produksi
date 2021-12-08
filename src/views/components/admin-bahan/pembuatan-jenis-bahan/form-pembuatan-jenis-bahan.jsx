import React from "react";
import "antd/dist/antd.css";
import { Form, Row, Col, Select, Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import JenisBahan from "../../../../application/selectors/masterjenisbahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.masterjenisbahan.feedback !== undefined) {
    return {
      initialValues: {
        kode_jenis_bahan: state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        kode_jenis_bahan: state.masterjenisbahan.feedback[0]?.kode_jenis_bahan,
      },
    };
  }
};

let FormPembuatanJenisBahanDetail = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataJenisBahan = useSelector(JenisBahan.getAllMasterJenisBahan);

  return (
    <Modal
      visible={visible}
      title="Detail Jenis Bahan"
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
              name="kode_jenis_bahan"
              label={<span style={{ fontSize: "13px" }}>Kode Jenis Bahan</span>}
              style={{ width: "100%" }}
              component={styleAntd.ASelect}
              placeholder="Pilih Kode Jenis Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataJenisBahan.map((item) => {
                return (
                  <Option
                    value={item.kode_jenis_bahan}
                    key={item.kode_jenis_bahan}
                  >
                    <span style={{ fontSize: "13px" }}>
                      {item.nama_jenis_bahan +
                        " (" +
                        item.kode_jenis_bahan +
                        ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="berat_dibutuhkan"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Dibutuhkan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Dibutuhkan"
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
        </Row>
      </Form>
    </Modal>
  );
};

FormPembuatanJenisBahanDetail = reduxForm({
  form: "FormPembuatanJenisBahanDetail",
  enableReinitialize: true,
})(FormPembuatanJenisBahanDetail);
export default connect(maptostate, null)(FormPembuatanJenisBahanDetail);
