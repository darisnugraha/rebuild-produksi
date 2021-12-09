import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../infrastructure/shared/styleAntd";
import ui from "../../../application/selectors/ui";
import Bahan from "../../../application/selectors/masterbahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.masterbahan.feedback !== undefined) {
    return {
      initialValues: {
        nama_bahan: "tidakada",
        jumlah_tambahan: "",
        berat_pakai: "",
      },
    };
  } else {
    return {
      initialValues: {
        nama_bahan: "tidakada",
        jumlah_tambahan: "",
        berat_pakai: "",
      },
    };
  }
};

let FormDetailTambahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataBahan = useSelector(Bahan.getAllMasterBahan);

  return (
    <Modal
      visible={visible}
      title="Detail Tambahan"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {}}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col offset={1}>
            <Field
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Nama Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Nama Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              <Option value="tidakada" key="tidakada">
                <span style={{ fontSize: "13px" }}>Tidak Ada</span>
              </Option>
              {dataBahan.map((item) => {
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
              name="jumlah_tambahan"
              type="number"
              label={<span style={{ fontSize: "13px" }}>Jumlah Tambahan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Jumlah Tambahan"
            />
          </Col>
          <Col offset={1}>
            <Field
              name="berat_pakai"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Berat Pakai</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Berat Pakai"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormDetailTambahan = reduxForm({
  form: "FormDetailTambahan",
  enableReinitialize: true,
})(FormDetailTambahan);
export default connect(maptostate, null)(FormDetailTambahan);
