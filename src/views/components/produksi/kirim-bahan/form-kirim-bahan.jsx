import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import KirimBahanAdminPusat from "../../../../application/selectors/kirimbahanadminpusat";

const { Option } = Select;

const maptostate = (state) => {
  if (state.kirimbahanadminpusat.feedback !== undefined) {
    return {
      initialValues: {
        divisi: localStorage.getItem("divisi"),
        staff: state.kirimbahanadminpusat.dataStaff[0]?.staff,
        nama_bahan: state.kirimbahanadminpusat.dataStockBahan[0]?.nama_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: "",
        staff: "",
        nama_bahan: "",
      },
    };
  }
};

let FormKirimBahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataStaff = useSelector(
    KirimBahanAdminPusat.getAllStaffStockBahanDivisi
  );
  const dataStockBahan = useSelector(
    KirimBahanAdminPusat.getAllStockBahanByStaff
  );

  return (
    <Modal
      visible={visible}
      title="Data Kirim"
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
              name="divisi"
              type="text"
              label={<span style={{ fontSize: "13px" }}>Divisi</span>}
              component={styleAntd.AInput}
              style={{ width: 250 }}
              className="form-item-group"
              placeholder="Masukkan Divisi"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="staff"
              label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Asal"
              onBlur={(e) => e.preventDefault()}
            >
              {dataStaff.map((item) => {
                return (
                  <Option value={item.staff} key={item.staff}>
                    <span style={{ fontSize: "13px" }}>{item.staff}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col offset={1}>
            <Field
              name="nama_bahan"
              label={<span style={{ fontSize: "13px" }}>Bahan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Bahan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataStockBahan.map((item) => {
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
              style={{ width: 250 }}
              className="form-item-group"
              placeholder="Masukkan Berat Bahan"
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormKirimBahan = reduxForm({
  form: "FormKirimBahan",
  enableReinitialize: true,
})(FormKirimBahan);
export default connect(maptostate, null)(FormKirimBahan);
