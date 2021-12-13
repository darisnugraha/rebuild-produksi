import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import Tukang from "../../../../application/selectors/mastertukang";
import TerimaBahan from "../../../../application/selectors/terimabahan";
import {
  getSaldoBahanTukang,
  getSaldoKirimBahanOpenChange,
  setKodeStaff,
} from "../../../../application/actions/terimabahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimabahan.kodeStaff !== null) {
    return {
      initialValues: {
        divisi: localStorage.getItem("divisi") || "",
        staff: state.terimabahan.kodeStaff,
        nama_bahan: state.form.FormTerimaTambahan?.values.nama_bahan,
        berat_bahan: state.terimabahan.beratBahan[0]?.berat_total,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: localStorage.getItem("divisi") || "",
        staff: state.mastertukang.feedback[0]?.kode_staff,
        nama_bahan: state.form.FormTerimaTambahan?.values.nama_bahan,
        berat_bahan: state.terimabahan.beratBahan[0]?.berat_total,
      },
    };
  }
};

let FormTerimaTambahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataStaff = useSelector(Tukang.getAllMasterTukang);
  const dataBahan = useSelector(TerimaBahan.getSaldoBahanTukang);

  return (
    <Modal
      visible={visible}
      title="Data Terima"
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
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Divisi Tujuan"
              disabled
            />
          </Col>
          <Col offset={1}>
            <Field
              name="staff"
              label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Tujuan"
              onBlur={(e) => e.preventDefault()}
              onChange={(val) => {
                dispatch(getSaldoBahanTukang({ staff: val }));
                dispatch(setKodeStaff({ staff: val }));
              }}
            >
              {dataStaff.map((item) => {
                return (
                  <Option value={item.kode_staff} key={item.kode_staff}>
                    <span style={{ fontSize: "13px" }}>
                      {item.kode_staff === item.nama_staff
                        ? item.nama_staff
                        : item.nama_staff + " (" + item.kode_staff + ")"}
                    </span>
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
              onChange={(e) =>
                dispatch(getSaldoKirimBahanOpenChange({ noTransaksi: e }))
              }
            >
              {dataBahan.map((item) => {
                return (
                  <Option value={item.no_transaksi} key={item.no_transaksi}>
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
              disabled
            />
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};

FormTerimaTambahan = reduxForm({
  form: "FormTerimaTambahan",
  enableReinitialize: true,
})(FormTerimaTambahan);
export default connect(maptostate, null)(FormTerimaTambahan);
