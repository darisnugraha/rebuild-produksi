import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form";
import "antd/dist/antd.css";
import styleAntd from "../../../../infrastructure/shared/styleAntd";
import ui from "../../../../application/selectors/ui";
import KirimBahanAdminPusat from "../../../../application/selectors/kirimbahanadminpusat";
import MasterTukang from "../../../../application/selectors/mastertukang";
import {
  addKirimBahanAdminPusat,
  getAllStockBahanByStaff,
} from "../../../../application/actions/kirimbahanadminpusat";
import getLocal from "../../../../infrastructure/services/local/get-local";

const { Option } = Select;

const maptostate = (state) => {
  if (state.kirimbahanadminpusat.feedback !== undefined) {
    return {
      initialValues: {
        divisi: getLocal("divisi"),
        divisi_tujuan: state.kirimbahanadminpusat.feedback[0]?.divisi,
        staff: state.kirimbahanadminpusat.dataStaff[0]?._id,
        staff_tujuan: state.mastertukang.feedback[0]?.nama_tukang,
        nama_bahan: state.kirimbahanadminpusat.dataStockBahan[0]?.nama_bahan,
      },
    };
  } else {
    return {
      initialValues: {
        divisi: "",
        divisi_tujuan: "",
        staff: "",
        staff_tujuan: "",
        nama_bahan: "",
      },
    };
  }
};

let FormKirimBahanAdminPusat = ({ visible, onCreate, onCancel }, prop) => {
  const btnLoading = useSelector(ui.getBtnLoading);
  // eslint-disable-next-line
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const dataDivisi = useSelector(KirimBahanAdminPusat.getAllDivisi);
  const dataStaff = useSelector(
    KirimBahanAdminPusat.getAllStaffStockBahanDivisi
  );
  const dataStaffAll = useSelector(MasterTukang.getAllMasterTukang);
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
      onOk={() => {
        dispatch(addKirimBahanAdminPusat);
      }}
    >
      <Form layout="vertical" form={form}>
        <Row>
          <Col span={8} offset={1}>
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
          <Col span={8} offset={1}>
            <Field
              name="divisi_tujuan"
              label={<span style={{ fontSize: "13px" }}>Divisi Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Divisi Asal"
              onBlur={(e) => e.preventDefault()}
            >
              {dataDivisi.map((item) => {
                return (
                  <Option value={item.divisi} key={item.divisi}>
                    <span style={{ fontSize: "13px" }}>{item.divisi}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={8} offset={1}>
            <Field
              name="staff"
              label={<span style={{ fontSize: "13px" }}>Tukang Asal</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Asal"
              onBlur={(e) => e.preventDefault()}
              onChange={(e) => dispatch(getAllStockBahanByStaff({ staff: e }))}
            >
              {dataStaff.map((item) => {
                return (
                  <Option value={item._id} key={item._id}>
                    <span style={{ fontSize: "13px" }}>{item.tukang}</span>
                  </Option>
                );
              })}
            </Field>
          </Col>
          <Col span={8} offset={1}>
            <Field
              name="staff_tujuan"
              label={<span style={{ fontSize: "13px" }}>Tukang Tujuan</span>}
              style={{ width: 250 }}
              component={styleAntd.ASelect}
              placeholder="Pilih Tukang Tujuan"
              onBlur={(e) => e.preventDefault()}
            >
              {dataStaffAll.map((item) => {
                return (
                  <Option value={item.nama_tukang} key={item.nama_tukang}>
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
          <Col span={8} offset={1}>
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
          <Col span={8} offset={1}>
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

FormKirimBahanAdminPusat = reduxForm({
  form: "FormKirimBahanAdminPusat",
  enableReinitialize: true,
})(FormKirimBahanAdminPusat);
export default connect(maptostate, null)(FormKirimBahanAdminPusat);
