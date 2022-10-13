import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import TerimaTambahan from "../../../../application/selectors/terimatambahan";
import Tukang from "../../../../application/selectors/mastertukang";
import {
  addTerimaTambahan,
  getSaldoKirimBahanOpenChange,
} from "../../../../application/actions/terimatambahan";

const { Option } = Select;

const maptostate = (state) => {
  if (state.terimatambahan.dataTukang.length !== 0) {
    return {
      initialValues: {
        divisi: localStorage.getItem("divisi") || "",
        staff_tujuan: state.mastertukang.feedback[0]?.nama_tukang,
        staff: state.terimatambahan.kodeStaff,
        nama_bahan: state.terimatambahan.namaBahan,
        berat_bahan: state.terimatambahan.berat,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: localStorage.getItem("divisi") || "",
        staff_tujuan: state.mastertukang.feedback[0]?.nama_tukang,
        staff: "",
        nama_bahan: "",
        berat_bahan: "",
      },
    };
  }
};

let FormTerimaTambahan = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataStaffTujuan = useSelector(Tukang.getAllMasterTukang);
  const dataBahan = useSelector(TerimaTambahan.getDataTambahan);

  return (
    <Modal
      visible={visible}
      title="Data Terima"
      okText="Simpan"
      cancelText="Batal"
      confirmLoading={btnLoading}
      onCancel={onCancel}
      onOk={() => {
        dispatch(addTerimaTambahan);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col span={8} offset={1}>
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
          <Col span={10} offset={1}>
            <Field
              name="staff_tujuan"
              label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataStaffTujuan.map((item) => {
                return (
                  <Option value={item.nama_tukang} key={item._id}>
                    <span style={{ fontSize: "13px" }}>
                      {item.kode_tukang === item.nama_tukang
                        ? item.nama_tukang
                        : item.nama_tukang + " (" + item.kode_tukang + ")"}
                    </span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={8} offset={1} style={{ display: "none" }}>
            <Field
              name="staff"
              label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
              component={styleAntd.AInput}
              className="form-item-group"
              placeholder="Masukkan Tukang Asal"
            />
          </Col>
          <Col span={8} offset={1}>
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
                  <Option value={item._id} key={item._id}>
                    <span style={{ fontSize: "13px" }}>{item.nama_bahan}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>

          <Col span={8} offset={1}>
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
